const fs = require('fs');
const translate = require('google-translate-api-x');

// Chunking utility
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

async function translateObject(sourceObj, targetLang) {
  const keys = Object.keys(sourceObj);
  const values = Object.values(sourceObj);
  
  const chunks = chunkArray(values, 50);
  const translatedValues = [];
  
  console.log(`Starting translation to ${targetLang} for ${keys.length} keys in ${chunks.length} chunks...`);
  
  let chunkIdx = 1;
  for (const chunk of chunks) {
    try {
      console.log(`Translating chunk ${chunkIdx}/${chunks.length}...`);
      const res = await translate(chunk, { to: targetLang });
      
      // google-translate-api-x returns an array of objects when passed an array
      if (Array.isArray(res)) {
        translatedValues.push(...res.map(r => r.text));
      } else {
         // if it was a single string for some reason (which shouldn't happen with chunk size 50 unless chunk length is 1)
         if (chunk.length === 1) {
            translatedValues.push(res.text);
         } else {
            console.error("Unexpected response format:", res);
         }
      }
      
      // Sleep slightly to avoid rate limit
      await new Promise(r => setTimeout(r, 1500));
    } catch (error) {
      console.error(`Error translating chunk ${chunkIdx}:`, error);
      // Fallback: fill with original English values on error
      translatedValues.push(...chunk);
    }
    chunkIdx++;
  }
  
  const resultObj = {};
  for (let i = 0; i < keys.length; i++) {
    resultObj[keys[i]] = translatedValues[i] || sourceObj[keys[i]];
  }
  
  return resultObj;
}

async function main() {
  const enData = JSON.parse(fs.readFileSync('src/en.json', 'utf8'));
  
  // existing DE keys
  let deData = {};
  if (fs.existsSync('src/de.json')) {
    deData = JSON.parse(fs.readFileSync('src/de.json', 'utf8'));
  }

  // 1. Arabic (ar)
  const arData = await translateObject(enData, 'ar');
  fs.writeFileSync('src/ar.json', JSON.stringify(arData, null, 2));
  console.log('Saved src/ar.json');

  // 2. Slovak (sk)
  const skData = await translateObject(enData, 'sk');
  fs.writeFileSync('src/sk.json', JSON.stringify(skData, null, 2));
  console.log('Saved src/sk.json');

  // 3. German (de) - only translate missing keys
  const missingDeKeys = {};
  for (const key of Object.keys(enData)) {
    if (!deData[key]) {
      missingDeKeys[key] = enData[key];
    }
  }
  
  if (Object.keys(missingDeKeys).length > 0) {
    console.log(`Found ${Object.keys(missingDeKeys).length} missing German keys. Translating...`);
    const translatedMissingDe = await translateObject(missingDeKeys, 'de');
    for (const key of Object.keys(translatedMissingDe)) {
      deData[key] = translatedMissingDe[key];
    }
  }
  fs.writeFileSync('src/de.json', JSON.stringify(deData, null, 2));
  console.log('Saved src/de.json');
  
  console.log('All translations complete!');
}

main().catch(console.error);

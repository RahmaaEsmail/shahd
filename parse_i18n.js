const fs = require('fs');

const content = fs.readFileSync('src/i18n.js', 'utf8');

const lines = content.split('\n');

const englishKeys = {};
let inEn = false;
let inDe = false;
const deKeys = {};

for (const line of lines) {
  // Check if we enter the english block
  if (line.includes('en: {')) {
    inEn = true;
    continue;
  }
  
  if (line.includes('de: {')) {
    inDe = true;
    continue;
  }

  // Very basic check for exiting the block - a line with just "} ," or "}" or "}," or "}  " might close the block
  // but it's simpler to just look for key-value pairs
  const match = line.match(/"([^"]+)":\s*"([^"]+)"/);
  if (match) {
    if (inEn && !inDe) {
      englishKeys[match[1]] = match[2];
    } else if (inDe) {
      deKeys[match[1]] = match[2];
    }
  }
  
  if (inEn && !inDe && line.trim() === '},') {
     // Wait, the en block is closed by `},`
  }
}

console.log(`Found ${Object.keys(englishKeys).length} English keys`);
console.log(`Found ${Object.keys(deKeys).length} German keys`);

fs.writeFileSync('src/en.json', JSON.stringify(englishKeys, null, 2));
if (Object.keys(deKeys).length > 0) {
  fs.writeFileSync('src/de.json', JSON.stringify(deKeys, null, 2));
}

// Generate empty ar.json and sk.json with same keys but empty string values
const emptyKeys = {};
for (const key of Object.keys(englishKeys)) {
  emptyKeys[key] = "";
}

fs.writeFileSync('src/ar.json', JSON.stringify(emptyKeys, null, 2));
fs.writeFileSync('src/sk.json', JSON.stringify(emptyKeys, null, 2));

console.log('Saved en.json, de.json, ar.json, and sk.json');

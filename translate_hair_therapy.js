const fs = require('fs');
const translate = require('google-translate-api-x');

const strings = [
  "Hair Transplant Packages"
];

async function appendToJsFile(langFile, targetLang, keys) {
  if (!fs.existsSync(langFile)) return;
  let content = fs.readFileSync(langFile, 'utf8');
  
  const toTranslate = [];
  for (const key of keys) {
    if (!content.includes(`"${key}"`)) {
      toTranslate.push(key);
    }
  }

  if (toTranslate.length === 0) return;

  const translatedValues = [];
  if (targetLang === 'en') {
    translatedValues.push(...toTranslate);
  } else {
    try {
      const res = await translate(toTranslate, { to: targetLang });
      if (Array.isArray(res)) {
        translatedValues.push(...res.map(r => r.text));
      } else {
        if (toTranslate.length === 1) {
          translatedValues.push(res.text);
        }
      }
    } catch (error) {
      console.error(error);
      return;
    }
  }
  
  let appendStr = `\n  // Hair Therapy Package\n`;
  for (let i = 0; i < toTranslate.length; i++) {
    const val = (translatedValues[i] || toTranslate[i]).replace(/"/g, '\\"');
    appendStr += `  "${toTranslate[i]}": "${val}",\n`;
  }
  
  const lastBraceIdx = content.lastIndexOf('}');
  if (lastBraceIdx !== -1) {
    const before = content.slice(0, lastBraceIdx);
    const after = content.slice(lastBraceIdx);
    const trimmedBefore = before.trim();
    const needsComma = trimmedBefore.length > 0 && !trimmedBefore.endsWith(',');
    content = before + (needsComma ? ',\n' : '') + appendStr + after;
    fs.writeFileSync(langFile, content);
  }
}

async function main() {
  await appendToJsFile('src/i18n/locales/en.js', 'en', strings);
  await appendToJsFile('src/i18n/locales/ar.js', 'ar', strings);
  await appendToJsFile('src/i18n/locales/de.js', 'de', strings);
  await appendToJsFile('src/i18n/locales/sk.js', 'sk', strings);
  console.log("Done translating");
}
main();

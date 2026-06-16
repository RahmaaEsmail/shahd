const fs = require('fs');
const translate = require('google-translate-api-x');

const footerStrings = [
  "Let's Connect",
  "Dr. Shahd Awad Clinic",
  "Premium aesthetic care combining dermatology, advanced treatments, and personalized wellness — empowering your natural glow.",
  "Quick Links",
  "Contact Info",
  "No: 58 A, East Madison Street, Baltimore, MD, USA 4508",
  "+001 23456789",
  "sirpi@example.com",
  "Newsletter",
  "Get In Touch",
  "Your Email",
  "© 2025 Shahd Clinic.Wedesigntech.",
  "Privacy Policy",
  "Terms & Conditions",
  "Youtube",
  "Twitter",
  "Instagram",
  "WhatsApp"
];

async function appendToJsFile(langFile, targetLang, keys) {
  if (!fs.existsSync(langFile)) {
    console.error(langFile + " not found!");
    return;
  }
  
  let content = fs.readFileSync(langFile, 'utf8');
  
  // Find strings that are not already in the file
  const toTranslate = [];
  for (const key of keys) {
    if (!content.includes(`"${key}"`)) {
      toTranslate.push(key);
    }
  }

  if (toTranslate.length === 0) {
    console.log(`No missing footer strings for ${targetLang}.`);
    return;
  }

  console.log(`Translating ${toTranslate.length} keys to ${targetLang}...`);
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
      console.error("Translation error:", error);
      return;
    }
  }
  
  // Build the JS string to append
  let appendStr = `\n  // Footer\n`;
  for (let i = 0; i < toTranslate.length; i++) {
    // escape quotes in translated text
    const val = (translatedValues[i] || toTranslate[i]).replace(/"/g, '\\"');
    appendStr += `  "${toTranslate[i]}": "${val}",\n`;
  }
  
  // Insert before the last closing brace
  const lastBraceIdx = content.lastIndexOf('}');
  if (lastBraceIdx !== -1) {
    const before = content.slice(0, lastBraceIdx);
    const after = content.slice(lastBraceIdx);
    
    // check if we need a comma
    const trimmedBefore = before.trim();
    const needsComma = trimmedBefore.length > 0 && !trimmedBefore.endsWith(',');
    
    content = before + (needsComma ? ',\n' : '') + appendStr + after;
    fs.writeFileSync(langFile, content);
    console.log(`Updated ${langFile}`);
  }
}

async function main() {
  await appendToJsFile('src/i18n/locales/en.js', 'en', footerStrings);
  await appendToJsFile('src/i18n/locales/ar.js', 'ar', footerStrings);
  await appendToJsFile('src/i18n/locales/de.js', 'de', footerStrings);
  await appendToJsFile('src/i18n/locales/sk.js', 'sk', footerStrings);
  console.log("All footer translations complete!");
}

main().catch(console.error);

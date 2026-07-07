import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {en} from './locales/en';
import {ar} from './locales/ar';
import {sk} from './locales/sk';
import {de} from './locales/de';

const resources = {
  en: {
    translation: en
  },
  ar: {
    translation: ar
  },
  sk: {
    translation: sk
  },
  de : {
    translation : de
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });


i18n.on('languageChanged', (lng) => {
  // Option A: If using standard Next.js / React Router, force a clean state refresh
  window.location.reload(); 
  
  // Option B: If you prefer a soft state reset without a hard page reload:
  // router.refresh(); (Next.js App Router)
});

export default i18n;

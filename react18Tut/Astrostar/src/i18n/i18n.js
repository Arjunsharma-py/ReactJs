import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../../public/locales/en/translation.json";
import translationHI from "../../public/locales/hi/translation.json";
import translationAR from "../../public/locales/ar/translation.json";
import Backend from "i18next-http-backend";

import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debugger: true,
    resources: {
      en: {
        translation: translationEN,
      },
      hi: {
        translation: translationHI,
      },
      ar: {
        translation: translationAR,
      },
    },
    fallbackLng: "en",
    backend: {
      loadPath:
        "https://api.mymemory.translated.net/get?q={{key}}&langpair=en|{{lng}}",
    },
  });

export default i18n;

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../../public/locales/en/translation.json";
import translationHI from "../../public/locales/hi/translation.json";
import translationAR from "../../public/locales/ar/translation.json";
import translationES from "../../public/locales/es/translation.json";
import translationFR from "../../public/locales/fr/translation.json";
import translationCMN from "../../public/locales/cmn/translation.json";
import translationRU from "../../public/locales/ru/translation.json";
import translationTA from "../../public/locales/ta/translation.json";
import translationJA from "../../public/locales/ja/translation.json";
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
      es: {
        translation: translationES,
      },
      fr: {
        translation: translationFR,
      },
      cmn: {
        translation: translationCMN,
      },
      ru: {
        translation: translationRU,
      },
      ja: {
        translation: translationJA,
      },
      ta: {
        translation: translationTA,
      },
    },
    fallbackLng: "en",
    backend: {
      loadPath:
        "https://api.mymemory.translated.net/get?q={{key}}&langpair=en|{{lng}}",
    },
  });

export default i18n;

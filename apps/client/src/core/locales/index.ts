import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./en.json";
import translationKZ from "./kz.json";
import translationRU from "./ru.json";

const resources = {
  ru: {
    translation: translationRU
  },
  en: {
    translation: translationEN
  },
  kz: {
    translation: translationKZ
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
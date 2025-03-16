import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from '../data/texteApp';
let langDefault = localStorage.getItem("lang") == "en" || localStorage.getItem("lang") == "fr" ? localStorage.getItem("lang") : "fr"
i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: langDefault, // Langue par défaut
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;

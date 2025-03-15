import { createContext, useEffect, useState } from "react";
import i18n from "../i18n/i18n";

export const LanguageContext = createContext()

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(localStorage.getItem("lang") == "en" || localStorage.getItem("lang") == "fr" ? localStorage.getItem("lang") : i18n.language)
    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language])
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        localStorage.setItem("lang", lang)
    }
    const change = () => {
        language === "fr" ? changeLanguage('en') : changeLanguage('fr')
    }
    return (
        <LanguageContext.Provider value={{ language, change }}>
            {children}
        </LanguageContext.Provider>
    );
}
export default LanguageProvider
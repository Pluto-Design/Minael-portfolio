/* eslint-disable */
import { createContext, useState, useEffect } from 'react'
import { LangData } from '../assets/data/Lang';

export const TranslateContext = createContext<any>({});

export const TranslateProvider = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
    const [lang, setLang] = useState<"en" | "fr">("en")
    const [t, setT] = useState<any>(LangData[lang])

    useEffect(() => {
        setT(LangData[lang])
    }, [lang])

    const invertLang = (lang: "en" | "fr") => setLang(lang)

    const value = { t, invertLang }

    return (
        <TranslateContext.Provider value={value}>
            {children}
        </TranslateContext.Provider>
    )
}
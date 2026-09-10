import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import english from "./locales/en.json";

type Language = "TH" | "EN";
type TranslationKey = keyof typeof english;
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: TranslationKey) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("pguard-language") === "EN" ? "EN" : "TH";
    } catch {
      return "TH";
    }
  });

  const t = useCallback(
    (text: TranslationKey) => {
      return language === "EN" ? english[text] : text;
    },
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  function setLanguage(value: Language) {
    updateLanguage(value);
    try {
      localStorage.setItem("pguard-language", value);
    } catch {
      // Switching still works when browser storage is unavailable.
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}

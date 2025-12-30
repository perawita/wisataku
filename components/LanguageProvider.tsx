"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import id from "../locales/id.json";
import en from "../locales/en.json";

type Lang = "id" | "en";

const translations: Record<Lang, Record<string, string>> = {
  id,
  en,
};

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}>({
  lang: "id",
  setLang: () => {},
  t: (k: string) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Lang | null;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key: string, vars?: Record<string, string | number>) => {
    const raw = translations[lang][key] ?? key;
    if (!vars) return raw;
    return Object.entries(vars).reduce(
      (s, [k, v]) => s.replace(new RegExp(`\\{\\s*${k}\\s*\\}`, "g"), String(v)),
      raw
    );
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  return useContext(LangContext).t;
}

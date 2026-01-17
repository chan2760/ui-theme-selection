import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  
  useEffect(() => {
    const saved = localStorage.getItem("app-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setTheme(parsed.theme || "light");
      setLanguage(parsed.language || "en");
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem(
      "app-settings",
      JSON.stringify({ theme, language })
    );
  }, [theme, language]);

  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        language,
        setTheme,
        setLanguage,
        resetSettings: () => {
          setTheme("light");
          setLanguage("en");
        },
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

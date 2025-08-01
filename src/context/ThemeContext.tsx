import React, { createContext, useState, useEffect, useContext } from "react";

// Theme context provider for managing application-wide theme
export type Theme = "theme1" | "theme2" | "theme3";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "theme1",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize theme from localStorage or fallback to default
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("app-theme") as Theme) || "theme1";
    }
    return "theme1";
  });

    // Sync theme with body class and localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy theme access
export const useTheme = () => useContext(ThemeContext);
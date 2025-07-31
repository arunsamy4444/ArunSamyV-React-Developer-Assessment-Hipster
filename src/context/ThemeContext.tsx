import React, { createContext, useState, useEffect, useContext } from "react";

// Define and export the Theme type once
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
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("app-theme") as Theme) || "theme1";
    }
    return "theme1";
  });

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

// Export the useTheme hook
export const useTheme = () => useContext(ThemeContext);

// Remove the duplicate export at the bottom
// The Theme type is already exported at the top
"use client";
import { useState, useEffect, createContext, useContext } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);
const preferColorSchemeQuery = "(prefers-color-scheme:dark)";

// const giveInitialTheme = (): string =>
//   localStorage.getItem("theme") ||
//   (matchMedia(preferColorSchemeQuery).matches ? "dark" : "light");

const giveInitialTheme = (): string => {
  if (typeof window !== "undefined") {
    return (
      localStorage.getItem("theme") ||
      (matchMedia(preferColorSchemeQuery).matches ? "dark" : "light")
    );
  }
  return "light";
};

// useTheme
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(giveInitialTheme);
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const mediaQuery = matchMedia(preferColorSchemeQuery);
    const handleColorSchemeChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleColorSchemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const htmlEl = document.getElementById("html");
    if (theme === "dark") {
      htmlEl?.classList.add("dark");
    } else {
      htmlEl?.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };

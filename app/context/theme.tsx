"use client";

import { createContext, useEffect, useState } from "react";
import { Theme } from "../types/custom-types";

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  mounted: boolean;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light"); // Always start with light to match server
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initialize Firebase when component mounts (client-side only)
    const initializeFirebase = async () => {
      const { initDB } = await import("../lib/configs/init-db");
      initDB();
    };
    
    initializeFirebase().catch(console.error);
    
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    // Only set theme if it's different from the default
    if (initialTheme !== "light") {
      setTheme(initialTheme);
    }
    
    // Apply theme class to document
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Update document class when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

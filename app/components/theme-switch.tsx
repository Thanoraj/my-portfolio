"use client";
import React, { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../context/theme";

const ThemeSwitch = () => {
  const { theme, setTheme, mounted } = useContext(ThemeContext)!;

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-gray-200 dark:bg-gray-800 bg-opacity-40 backdrop-blur-[0.5rem] shadow-md border border-gray-300 border-opacity-40 w-10 h-10 overflow-hidden rounded-full fixed bottom-4 right-4 z-[9000] flex justify-center items-center">
        <div className="w-4 h-4" /> {/* Placeholder to maintain layout */}
      </div>
    );
  }

  return (
    <button
      className="bg-gray-200 dark:bg-gray-800 bg-opacity-40 backdrop-blur-[0.5rem] shadow-md border border-gray-300 border-opacity-40 w-10 h-10 overflow-hidden rounded-full fixed bottom-4 right-4 z-[9000] flex justify-center items-center hover:scale-110 active:scale-105 transition-all"
      onClick={handleThemeToggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;

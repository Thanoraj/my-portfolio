"use client";
import React, { useEffect, useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../context/theme";

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;
  useEffect(() => {
    const prevTheme = window.localStorage.getItem("theme");
    console.log(prevTheme);

    if (prevTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className=" bg-gray-200 dark:bg-gray-800 bg-opacity-40 backdrop-blur-[0.5rem] shadow-md  border border-gray-300 border-opacity-40 w-10 h-10 overflow-hidden rounded-full fixed bottom-4 right-4 z-[9000] flex justify-center items-center hover:scale-110 active:scale-105 transition-all"
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
          window.localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");
        } else if (theme === "dark") {
          setTheme("light");
          window.localStorage.setItem("theme", "light");
          document.documentElement.classList.remove("dark");
        }
      }}>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;

"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { routes } from "@/app/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { ActiveSectionContext } from "../context/active-section";

const Header = () => {
  const { activeSection } = useContext(ActiveSectionContext)!;
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex fixed top-0 rounded-none border border-white dark:border-black/40 border-opacity-40 bg-gray-50 dark:bg-gray-950 bg-opacity-80 dark:bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6  sm:rounded-full left-1/2"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}>
        <nav className="">
          <ul className="flex h-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-400  sm:flex-nowrap sm: gap-1">
            {routes.map((link) => (
              <li
                className={clsx(
                  " justify-center flex items-center m-1 px-5 h-[4.5rem] sm:h-[2.5rem] relative",
                  activeSection === link.hash && "text-gray-950"
                )}
                key={link.hash}>
                <Link
                  className={clsx(
                    "flex w-full justify-center items-center hover:text-gray-950  transition dark:text-gr",
                    link.hash !== activeSection && "dark:hover:text-gray-50"
                  )}
                  href={link.hash}
                  onClick={() => {
                    console.log(link.hash);

                    // setActiveSection(link.hash);
                  }}>
                  {link.name}
                  {link.hash === activeSection && (
                    <motion.span
                      className="rounded-full bg-gray-500/10 dark:bg-gray-100 absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;

"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { routes } from "@/app/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { ActiveSectionContext } from "../context/active-section";

const Header = () => {
  const { activeSection, setActiveSection } = useContext(ActiveSectionContext)!;
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex fixed top-0 rounded-none border border-white border-opacity-40 bg-white bg-opacity-10 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6  sm:rounded-full left-1/2"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}>
        <nav className="">
          <ul className="flex h-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm: gap-2">
            {routes.map((link) => (
              <li
                className={clsx(
                  " justify-center flex items-center m-1 px-5 h-[4.5rem] sm:h-[2.75rem] relative",
                  activeSection === link.hash && "text-gray-950"
                )}
                key={link.hash}>
                <Link
                  className="flex w-full justify-center items-center hover:text-gray-950 transition "
                  href={link.hash}
                  onClick={() => {
                    console.log(link.hash);

                    setActiveSection(link.hash);
                  }}>
                  {link.name}
                  {link.hash === activeSection && (
                    <motion.span
                      className="rounded-full bg-gray-500/10 absolute inset-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
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

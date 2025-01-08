"use client";

import React from "react";
import { motion } from "framer-motion";
import { routes } from "@/app/lib/data";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex fixed top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-10 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full left-1/2"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}>
        <nav className="my-auto sm:mx-auto mx-8">
          <ul className="flex h-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm: gap-5">
            {routes.map((link) => (
              <li
                className="h-full my-auto justify-center flex"
                key={link.hash}>
                <Link
                  className="w-full justify-center px-3 my-auto hover:text-gray-950 transition"
                  href={link.hash}>
                  {link.name}
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

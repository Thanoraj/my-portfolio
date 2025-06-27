"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import NavLinks from "./nav-links";

/**
 * Top navigation header with responsive mobile support.
 */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="flex fixed top-0 left-1/2 w-[95%] sm:w-max px-2 sm:px-0 rounded-none border border-white dark:border-black/40 border-opacity-40 bg-gray-50 dark:bg-gray-950 bg-opacity-80 dark:bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="hidden sm:block">
          <NavLinks />
        </nav>
        <button
          aria-label="Toggle navigation"
          className="sm:hidden ml-auto p-2"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </motion.div>
      {menuOpen && (
        <motion.nav
          className="sm:hidden absolute left-0 top-full mt-2 w-full rounded-md border border-white dark:border-black/40 bg-gray-50 dark:bg-gray-950 shadow-lg shadow-black/[0.03]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <NavLinks onNavigate={() => setMenuOpen(false)} />
        </motion.nav>
      )}
    </header>
  );
};

export default Header;

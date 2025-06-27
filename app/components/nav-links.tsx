import { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { routes } from "@/app/lib/data";
import { ActiveSectionContext } from "../context/active-section";

/**
 * Renders navigation links used in the header.
 * @param onNavigate optional callback executed after clicking a link
 */
const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => {
  const { activeSection } = useContext(ActiveSectionContext)!;

  return (
    <ul className="flex flex-col sm:flex-row items-center sm:h-full justify-center gap-1 text-[0.9rem] font-medium text-gray-400">
      {routes.map((link) => (
        <li
          key={link.hash}
          className={clsx(
            "justify-center flex items-center px-5 py-3 sm:py-0 relative",
            activeSection === link.hash && "text-gray-950"
          )}
        >
          <Link
            href={link.hash}
            className={clsx(
              "flex w-full justify-center items-center hover:text-gray-950 transition dark:text-gr",
              link.hash !== activeSection && "dark:hover:text-gray-50"
            )}
            onClick={onNavigate}
          >
            {link.name}
            {link.hash === activeSection && (
              <motion.span
                className="rounded-full bg-gray-500/10 dark:bg-gray-100 absolute inset-0 -z-10"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

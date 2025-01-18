"use client";
import { motion } from "framer-motion";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
};
const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <motion.h2
      className="text-3xl font-medium capitalize mb-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.h2>
  );
};

export default SectionTitle;

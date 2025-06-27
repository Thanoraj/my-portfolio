"use client";
import React from "react";
import SectionTitle from "../section-title";
import PortfolioSection from "../portfolio-section";
import { motion } from "framer-motion";

type AboutSectionProps = {
  data: Record<string, string>;
};
const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <PortfolioSection id="#about" className="px-4">
      <SectionTitle>About me</SectionTitle>
      <motion.p
        className="font-medium"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        viewport={{ once: true }}>
        {data.p1}
        <span className="font-bold">{data.p2}</span>
        {data.p3}
        <span className="font-bold">{data.p4}</span>
        {data.p5}
      </motion.p>
    </PortfolioSection>
  );
};

export default AboutSection;

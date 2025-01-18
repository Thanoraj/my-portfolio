"use client";

import React, { useContext, useEffect } from "react";
import { ActiveSectionContext } from "../context/active-section";
import { SectionName } from "../types/custom-types";
import { useRef } from "react";

type PortfolioSectionProps = {
  id: SectionName;
  children: React.ReactNode;
  maxWidth?: string;
};
const PortfolioSection = ({
  id,
  children,
  maxWidth = "50rem",
}: PortfolioSectionProps) => {
  const sectionRef = useRef(null); // Reference for the section element
  const { setActiveSection } = useContext(ActiveSectionContext)!;

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio >= 0.5) {
          console.log("Entered to screen", id);
          setActiveSection(id); // Set true if 80% or more of the section is visible
        } else {
          console.log("left from screen", id);
        }
      },
      {
        threshold: 0.5, // 80% of the section needs to be visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (node) {
        observer.unobserve(node); // Clean up observer on unmount
      }
    };
  }, [id, setActiveSection]);

  return (
    <section
      ref={sectionRef}
      id={id.replace("#", "")}
      className={`min-h-screen flex items-center flex-col justify-center text-center`}
      style={{ maxWidth: maxWidth }}>
      {children}
    </section>
  );
};

export default PortfolioSection;

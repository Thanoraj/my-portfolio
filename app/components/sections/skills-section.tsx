"use client";

import React, { useState } from "react";
import PortfolioSection from "../portfolio-section";
import SectionTitle from "../section-title";
import clsx from "clsx";

type SkillsSectionProps = { data: Record<string, string[]> };

const SkillsSection = ({ data }: SkillsSectionProps) => {
  const [selectedSkill, setSelectedSkill] = useState("All");
  return (
    <PortfolioSection id={"#skills"}>
      <SectionTitle>Skills</SectionTitle>
      <h3 className="text-left w-full py-2 text-xl">Core: </h3>
      <div className="flex flex-wrap gap-2  w-full">
        {data.core.map((skill, index) => (
          <div
            className={clsx(
              "border-2 border-black-100 px-3 rounded-full cursor-pointer",
              selectedSkill === skill ? "bg-blue-100" : "hover:bg-blue-50",
              !data[skill.toLocaleLowerCase()]
                ? "pointer-events-none cursor-auto"
                : ""
            )}
            key={index}
            onClick={() => setSelectedSkill(skill)}>
            {skill}
          </div>
        ))}
      </div>
      <h3 className="text-left w-full pt-10 pb-2 text-xl">{selectedSkill}: </h3>
      <div className="flex flex-wrap gap-2 w-full">
        {(data[selectedSkill.toLowerCase()] ?? []).map((skill, index) => (
          <div
            className="border-2 border-black-100 px-3 rounded-full"
            key={index}>
            {skill}
          </div>
        ))}
      </div>
    </PortfolioSection>
  );
};

export default SkillsSection;

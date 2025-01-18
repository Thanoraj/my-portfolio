import React from "react";
import SectionTitle from "../section-title";
import PortfolioSection from "../portfolio-section";

type AboutSectionProps = {
  data: Record<string, string>;
};
const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <PortfolioSection id="#about">
      <SectionTitle>About me</SectionTitle>
      <p className="font-medium">
        {data.p1}
        <span className="font-bold">{data.p2}</span>
        {data.p3}
        <span className="font-bold">{data.p4}</span>
        {data.p5}
      </p>
    </PortfolioSection>
  );
};

export default AboutSection;

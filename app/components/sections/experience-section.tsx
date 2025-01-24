"use client";

import React from "react";
import PortfolioSection from "../portfolio-section";
import SectionTitle from "../section-title";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "@/app/types/experience";

type ExperienceSectionProps = {
  data: {
    experience: Experience[];
  };
};
const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  return (
    <PortfolioSection id={"#experience"} className="pt-28">
      <SectionTitle>Experiences</SectionTitle>
      <VerticalTimeline>
        {data.experience.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#f3f4f6",
              color: "#000",
              boxShadow: "none",
              textAlign: "left",
              left: "-140px",
              borderRadius: "15px",
            }}
            style={{
              width: "1000px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #9ca3af",
              padding: "0 500px 0 0",
              margin: "0 500px 0 0",
              left: index % 2 === 0 ? "440px" : "-514px",
            }}
            dateClassName="italic"
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              left: "360px",
              background: "#f3f4f6",
            }}
            // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title font-semibold">
              {experience.jobTitle}
            </h3>
            <p className="vertical-timeline-element-subtitle !mt-0 font-normal ">
              {experience.company}
            </p>
            <p className="!mt-1 text-gray-700 !text-sm">{experience.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </PortfolioSection>
  );
};

export default ExperienceSection;

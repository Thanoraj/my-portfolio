"use client";

import React, { useContext } from "react";
import PortfolioSection from "../portfolio-section";
import SectionTitle from "../section-title";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "@/app/types/experience";
import { ThemeContext } from "@/app/context/theme";

type ExperienceSectionProps = {
  data: {
    experience: Experience[];
  };
};
const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  const { theme } = useContext(ThemeContext)!;

  return (
    <PortfolioSection
      id={"#experience"}
      className="pt-28 w-[80%]"
      maxWidth="100%">
      <SectionTitle>Experiences</SectionTitle>
      <VerticalTimeline lineColor="#f3f4f6">
        {data.experience.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            // className=""
            contentStyle={{
              background: theme === "dark" ? "rgb(17 24 39 / 0.3)" : "#f3f4f6",
              // color: "#000",
              boxShadow: "none",
              textAlign: "left",
              // left: "-140px",
              borderRadius: "15px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #9ca3af",
              // padding: "0 500px 0 0",
              // margin: "0 500px 0 0",
              marginTop: "50px",
              // left: index % 2 === 0 ? "440px" : "-514px",
            }}
            dateClassName="italic mt-[50px]"
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              // left: "360px",
              // width: "40px",
              // height: "40px",
              // marginLeft: "-20px",
              marginTop: "50px",
              background: theme === "dark" ? "rgba(0,0,0)" : "#f3f4f6",
            }}
            // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title font-semibold">
              {experience.jobTitle}
            </h3>
            <p className="vertical-timeline-element-subtitle !mt-0 font-normal ">
              {experience.company}
            </p>
            <p className="!mt-1 text-gray-700 dark:text-gray-300 !text-sm">
              {experience.desc}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </PortfolioSection>
  );
};

export default ExperienceSection;

import React from "react";
import SectionTitle from "../section-title";
import PortfolioSection from "../portfolio-section";
import { ProjectData } from "@/app/types/project-data";
import ProjectCard from "../project-card";

type ProjectsSectionProps = {
  data: {
    projects: ProjectData[];
  };
};
const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  return (
    <PortfolioSection id="#projects" className="px-4" maxWidth="100%">
      <SectionTitle>Projects</SectionTitle>
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap">
        {data.projects.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </PortfolioSection>
  );
};

export default ProjectsSection;

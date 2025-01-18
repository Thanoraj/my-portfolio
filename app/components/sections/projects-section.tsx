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
    <PortfolioSection id="#projects" maxWidth="100%">
      <SectionTitle>Projects</SectionTitle>
      <div className="flex gap-5">
        {data.projects.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </PortfolioSection>
  );
};

export default ProjectsSection;

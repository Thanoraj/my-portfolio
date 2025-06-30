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
    <PortfolioSection id="#projects" maxWidth="100%" className="px-4 sm:px-6 lg:px-8">
      <SectionTitle>Projects</SectionTitle>
      <div className="w-full max-w-none">
        <div className="overflow-x-auto scrollbar-hide smooth-scroll scroll-snap-x">
          <div 
            className="flex gap-6 pb-4"
            style={{ 
              minWidth: `${data.projects.length * 24}rem`,
              width: 'max-content'
            }}
          >
            {data.projects.map((project) => (
              <div key={project.id} className="flex-none w-80 sm:w-96 scroll-snap-start">
                <ProjectCard data={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
};

export default ProjectsSection;

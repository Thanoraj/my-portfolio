import IntroSection from "@/app/components/sections/intro-section";
// import { getMyInfo } from "@/app/lib/services/db-services";
import AboutSection from "@/app/components/sections/about-section";
import ProjectsSection from "@/app/components/sections/projects-section";
import { ProjectData } from "@/app/types/project-data";
import { sectionsData } from "./lib/data";
import SkillsSection from "./components/sections/skills-section";
import ExperienceSection from "./components/sections/experience-section";
import { Experience } from "./types/experience";
import ContactSection from "./components/sections/contact-section";

export default async function Home() {
  const sections = sectionsData; // await getMyInfo();

  return (
    <main className="flex flex-col items-center px-2 sm:px-0">
      <IntroSection
        myData={sections.my_data}
        data={sections.intro.data as Record<string, string>}
      />
      <AboutSection data={sections.about.data as Record<string, string>} />
      <ExperienceSection
        data={
          sections.experience.data as {
            experience: Experience[];
          }
        }
      />
      <ProjectsSection
        data={sections.projects.data as { projects: ProjectData[] }}
      />
      <SkillsSection data={sections.skills.data as Record<string, string[]>} />
      <ContactSection />
    </main>
  );
}

import { HeroParallax } from "@/components/ui/hero-parallax";
import { allProjects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">
        My Projects and Work Portfolio
      </h2>
      <HeroParallax products={allProjects} />
    </section>
  );
};
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="mt-14">
      <h2>
        Projects
      </h2>
      <div className="h-3" />
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

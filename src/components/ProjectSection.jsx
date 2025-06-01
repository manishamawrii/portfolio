import projects from "../data/projectsDb";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div className="mt-11 mb-10 w-full sm:mt-22 sm:mb-25 sm:px-10">
      <h2 className="font-heading text-center text-4xl text-white">My Work</h2>
      <hr className="lg: mx-auto mb-8 w-35 text-orange-400" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] justify-items-center gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

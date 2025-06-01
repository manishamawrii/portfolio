import Icon from "@mdi/react";
import { mdiOpenInNew, mdiGithub } from "@mdi/js";

export default function ProjectCard({ project }) {
  return (
    <div className="group mx-4 flex max-w-[338px] flex-col gap-4 rounded-4xl bg-[#162544] text-white transition duration-200 hover:scale-110 hover:bg-[#2736529e] sm:mx-0 sm:gap-4">
      <div className="h-fit w-full rounded-4xl sm:h-[22vh]">
        <a href={project.previewLink} target="_blank">
          <img
            src={project.img}
            alt="Image not found"
            className="h-fit w-full rounded-tl-3xl rounded-tr-3xl sm:h-40"
          />
        </a>
      </div>
      <div className="px-5">
        <div className="min-h-[13vh]">
          <div className="mb-2 flex justify-between">
            <div className="relative w-fit">
              <p className="font-heading border-b-2 border-orange-400 text-2xl sm:border-0">
                {project.name}
              </p>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className="flex gap-1">
              <div>
                <a href={project.githubLink} target="_blank">
                  <Icon
                    path={mdiGithub}
                    size={1.4}
                    className="text-orange-400 duration-200 hover:scale-110"
                  />
                </a>
              </div>
              <div>
                <a href={project.previewLink} target="_blank">
                  <Icon
                    path={mdiOpenInNew}
                    size={1.4}
                    className="text-orange-400 duration-200 hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="font-body h-fit text-lg sm:min-h-20">
            {project.desc}
          </div>
        </div>
        <div className="mx-auto my-4 flex w-[90%] justify-center gap-4">
          {project.techStackUsed.map((tech) => {
            return (
              <div className="w-8" key={tech.name}>
                <img src={tech.logo} alt={tech.name} className="w-[90%]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

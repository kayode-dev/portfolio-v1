import React from "react";

const ProjectCards = ({ project }: { project: { image?: string, class: string, heading: string, summary: string, liveUrl: string, GithubRepo: string } }) => {
  return (
    <div className={`w-full grid place-items-start rounded-2xl doings border border-white/20 overflow-hidden ${project.class}`}>
      <div className="h-full w-full rounded-t-2xl">
        <img
          src={project.image}
          alt="pic"
          loading="lazy"
          // width={494}
          // height={360}
          className="rounded-t-2xl object-cover hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col items-center justify-between gap-2  w-full">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-xl font-semibold text-left">{project.heading}</h2>
          <p className="text-green-800 text-sm">{project.summary}</p>
        </div>
        <div className="self-start flex items-center gap-8 text-sm">
          <a href={project.liveUrl}>
            <button className=" p-2 rounded-lg bg-green-800 text-white hover:scale-105 duration-500">
              Live Preview 
              <span className="material-symbols-outlined text-sm">
                arrow_outward
              </span>
            </button>
          </a>
          <a href={project.GithubRepo}>
            <button className=" p-2 rounded-lg bg-green-800 text-white hover:scale-105  duration-500">
              Github <i className="fa-brands fa-github"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;

import React, { FC } from "react";
const ProjectCards = (props: any) => {
  return (
    <div className="p-8 flex flex-col justify-center items-center text-center gap-8 shadow-xl rounded-2xl">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold">{props.heading}</h2>
        <p className="text-lg text-green-800">{props.summary}</p>
      </div>
      <div className="flex items-center gap-8">
        <a href={props.liveUrl}>
          <button className="h-10 w-30 p-2 rounded-lg bg-green-800 text-white hover:scale-110 duration-500">
            Live Url
          </button>
        </a>
        <a href={props.GithubRepo}>
          <button className="h-10 w-30 p-2 rounded-lg bg-green-800 text-white hover:scale-110 duration-500">
            Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;

import React from "react";
import Card from "./UI/Card";
import ProjectCards from "./UI/project-cards";

const projects: {
  heading: string;
  summary: string;
  liveUrl: string;
  GithubRepo: string;
  tech: any[];
}[] = [
  {
    heading: "RunDwn",
    summary:
      "A website that utilizes the Spotify APi to get users top artist's and tracks over their selected time frame",
    liveUrl: "https://rundwn.vercel.app",
    GithubRepo: "https://github.com/kayode-dev/wrapped-anytime",
    tech: [
      require("../images/tech/twc.png"),
      require("../images/tech/rea.png"),
    ],
  },
  {
    heading: "Kayode-GPT",
    summary:
      "A website that utilizes the Spotify APi to get users top artist's and tracks over their selected time frame",
    liveUrl: "https://kayode-gpt.vercel.app/",
    GithubRepo: " https://github.com/kayode-dev/kayode-gpt", 
    tech: [
      require("../images/tech/twc.png"),
      require("../images/tech/rea.png"),
      require("../images/tech/chatgpt.png"),
    ],
  },
  {
    heading: "Task-manager",
    summary:
      "A website that utilizes the Spotify APi to get users top artist's and tracks over their selected time frame",
    liveUrl: "https://task-manager-eta-six.vercel.app/",
    GithubRepo: "https://github.com/kayode-dev/wrapped-anytime",
    tech: [
      require("../images/tech/twc.png"),
      require("../images/tech/rea.png"),
      require("../images/tech/firebase.png"),
    ],
  },
];

const Projects = () => {
  return (
    <div>
      {" "}
      <h1 className="text-center font-bold text-3xl mb-4">Live Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {projects.map((project) => (
          <ProjectCards
            heading={project.heading}
            summary={project.summary}
            liveUrl={project.liveUrl}
            GithubRepo={project.GithubRepo}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

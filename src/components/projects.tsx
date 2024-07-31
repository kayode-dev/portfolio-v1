import React from "react";
import ProjectCards from "./UI/project-cards";

const projects: {
  image?: string;
  heading: string;
  summary: string;
  liveUrl: string;
  GithubRepo: string;
  class: string;
}[] = [
  {
    image: require("../images/projects/rundwn.png"),
    heading: "RunDwn",
    summary:
      "A website that utilizes the Spotify API to fetch users top 10 favorite artist's and tracks over their selected time frame and displays them",
    liveUrl: "https://rundwn.vercel.app",
    GithubRepo: "https://github.com/kayode-dev/wrapped-anytime",
    class: "run-tech",
  },
  {
    image: require("../images/projects/kayGPT.png"),
    heading: "Kayode-GPT",
    summary:
      "An AI-chatbot developed using the CHAT-GPT 3.5 turbo API to respond to prompts inputted, with Image Generation capabilities.",
    liveUrl: "https://kay-gpt.vercel.app/",
    GithubRepo: " https://github.com/kayode-dev/kayode-gpt-2",
    class: "gpt-tech",
  },
  {
    image: require("../images/projects/task.png"),
    heading: "Task-manager",
    summary:
      "A Todo list application where the user can add, remove, update task and mark them as done, using the Realtime DB from FIrebase",
    liveUrl: "https://task-manager-eta-six.vercel.app/",
    GithubRepo: "https://github.com/kayode-dev/task-manager",
    class: "task-tech",
  },
  {
    image: require("../images/projects/Screenshot 2024-07-31 130541.png"),
    heading: "Tic-Tac-Toe",
    summary:
      "A simple Tic-tac-toe game using a 2D Array, determines who wins or if its a draw and displays the outcome in via the browers alert system",
    liveUrl: "https://tic-tac-toe-phi-taupe.vercel.app/",
    GithubRepo: "https://github.com/kayode-dev/tic-tac-toe",
    class: "tic-tech",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      {" "}
      <h1 className="text-center font-bold text-3xl mb-4" id="live-pro">
        Live Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project) => (
          <ProjectCards project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

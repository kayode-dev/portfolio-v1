import React from "react";

import Card from "./UI/Card";
import love from "../images/memojilove.png";
import lightbulb from "../images/memojilightbulb.png";
import smile from "../images/memojismile.png";
import Projects from "./projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Doings = () => {
  const doings: { image: any; heading: string; summary: any }[] = [
    {
      image: love,
      heading: "Frontend Development",
      summary: (
        <p>
          I build fast, SEO friendly frontend applications that suites your
          every need. With technologies like <code>HTML</code>, <code>CSS</code>
          , <code>JavaScript</code>, <code>ReactJS</code>, and more.
        </p>
      ),
    },
    {
      image: lightbulb,
      heading: "Project Management",
      summary: (
        <p>
          I build create, manage and execute project plans to acheive client
          goals. I also understand projet risk and assign team members to
          specific tasks
        </p>
      ),
    },
    {
      image: smile,
      heading: "Creative Writing",
      summary: (
        <p>
          I write articles on music / entertainment, press releases for bodies
          of work, scripts for ads or stories and engage in the occasional rant
          on my personal blog
        </p>
      ),
    },
  ];
  const technologies: { image: any; name: string }[] = [
    { image: require("../images/tech/h5.png"), name: "HTML5" },
    { image: require("../images/tech/c3.png"), name: "CSS 3" },
    { image: require("../images/tech/js.png"), name: "Javascript" },
    { image: require("../images/tech/ts.png"), name: "Typescript" },
    { image: require("../images/tech/twc.png"), name: "Tailwind CSS" },
    { image: require("../images/tech/bs.png"), name: "Bootstrap" },
    { image: require("../images/tech/blazor.png"), name: "Blazor" },
    { image: require("../images/tech/rea.png"), name: "React" },
    { image: require("../images/tech/dotnet.png"), name: ".NET" },
    { image: require("../images/tech/firebase.png"), name: "Firebase" },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const doings = gsap.utils.toArray(".doings")
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ".doings", markers: true, scrub: 1, },
    });
    tl.from(doings, {
      y: 400,
      opacity: 0,
      duration: 3,
    });
  });

  return (
    <div className="flex flex-col gap-32">
      {" "}
      <div id="what-i-do">
        <h1 className="text-center font-bold text-3xl mb-8">What I Do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {doings.map((doin) => (
            <Card
              img={doin.image}
              heading={doin.heading}
              summary={doin.summary}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-3xl mb-8">About Me</h1>
        <p className="text-lg text-green-800 text-center">
          Hey there 👋🏾, I am Kayode Babalola, a Front-end Developer, Project
          Manager and Creative Writer. I consider myself a creative first and
          this has helped me in extending and inter-relating my abilities in all
          my creative endavours. I have 2+ years experience as a Front-end
          Developer and Project Manager and 4+ years experience as a Creative
          Writer.
        </p>
      </div>
      <div>
        <h1 className="text-center font-bold text-3xl mb-8">Technologies</h1>
        <div className=" flex flex-wrap gap-8 items-center justify-center">
          {technologies.map((tech) => (
            <div className="h-20 w-20 p-4 flex flex-col justify-center items-center text-center gap-4 doings rounded-lg card-img">
              <div>
                <img
                  src={tech.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Projects />
      <div
        className="flex flex-col justify-center items-center gap-5"
        id="contact-me"
      >
        <h1
          className="text-center font-bold text-3xl mb-4"
          id="contact-me"
        >
          Contact Me
        </h1>
        <a href="mailto:babalolakayode44@gmail.com">
          <p className="text-lg text-green-800 text-center underline mb-4">
            babalolakayode44@gmail.com
          </p>
        </a>
        <a
          href="https://calendly.com/babalolakayode44"
          target="_blank"
          rel="noreferrer"
        >
          <button className="h-10 w-30 p-2 rounded-lg bg-green-800 text-white hover:scale-110 duration-500">
            Book a Meeting
          </button>
        </a>
        <p>Follow me on:</p>
        <div className="flex justify-center items-center gap-10 text-3xl">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kayode-dev"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/kayode.docx"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/kayode_txt"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kayode-babalola-a522a6226/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-3xl mb-4">
          Spotify Playlist
        </h1>
        <iframe
          title="spotify playlist"
          className="rounded-2xl"
          src="https://open.spotify.com/embed/playlist/3g1wkGVS4b2vuhrTEOKGej?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Doings;

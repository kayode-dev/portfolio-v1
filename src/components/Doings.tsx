import { Link } from "react-router-dom";
import React from "react";
import Card from "./UI/Card";
import Articles from "./Articles";
import love from "../images/memojilove.png";
import meditate from "../images/memojimeditate.png";
import smile from "../images/memojismile.png";

const Doings = () => {
  const doings = [
    {
      image: love,
      heading: "Frontend Development",
      summary: (
        <p>
          I build fast, beautiful, SEO friendly frontend applications that
          suites your every need. With <code>HTML</code>, <code>CSS</code>,{" "}
          <code>JavaScript</code>, <code>ReactJS</code>, and more.
        </p>
      ),
    },
    {
      image: meditate,
      heading: "Backend Development",
      summary: (
        <p>
          I build fast, beautiful, SEO friendly frontend applications that
          suites your every need. With <code>HTML</code>, <code>CSS</code>,{" "}
          <code>JavaScript</code>, <code>ReactJS</code>, and more.
        </p>
      ),
    },
    {
      image: smile,
      heading: "Article Writing",
      summary: (
        <p>
          I build fast, beautiful, SEO friendly frontend applications that
          suites your every need. With <code>HTML</code>, <code>CSS</code>,{" "}
          <code>JavaScript</code>, <code>ReactJS</code>, and more.
        </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {" "}
      <div>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra magna.
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center gap-5"
        id="contact-me"
      >
        <h1 className="text-center font-bold text-3xl mb-4" id="contact-me">
          Contact Me
        </h1>
        <a href="mailto:babalolakayode44@gmail.com">
          <p className="text-lg text-green-800 text-center underline mb-4">
            babalolakayode44@gmail.com
          </p>
        </a>
        <button className="h-10 w-30 p-2 rounded-lg bg-green-800 hover:scale-110">
          Book a Meeting
        </button>
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
      <Articles />
      <div>
        <h1 className="text-center font-bold text-3xl mb-4">
          Spotify Playlist
        </h1>
        <iframe
          title="spotify playlist"
          className="rounded-2xl"
          src="https://open.spotify.com/embed/playlist/3IKp71IDc0HpxOFI0K5twy?utm_source=generator"
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

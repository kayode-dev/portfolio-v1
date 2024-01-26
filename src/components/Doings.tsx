import React from "react";

import Card from "./UI/Card";
import love from "../images/memojilove.png";
import lightbulb from "../images/memojilightbulb.png";
import smile from "../images/memojismile.png";
import Projects from "./projects";

import { useGSAP } from "@gsap/react";
import WhatIDo from "./UI/whatido";
import AboutMe from "./UI/about-me";
import Technology from "./UI/technology";
import ContactMe from "./UI/contact-me";
import SpotifyPlaylist from "./UI/spotify-playlist";

const Doings = () => {

  return (
    <div className="flex flex-col gap-32">
      {" "}
      <WhatIDo/>
      <AboutMe/>
      <Technology/>
      <Projects />
      <ContactMe/>
      <SpotifyPlaylist/>
    </div>
  );
};

export default Doings;

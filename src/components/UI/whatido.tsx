import React from "react";

import Card from "./Card";
import love from "../../images/memojilove.png";
import lightbulb from "../../images/memojilightbulb.png";
import smile from "../../images/memojismile.png";

const WhatIDo = () => {
    const doings: {
        image: any;
        heading: string;
        summary: any;
        scrollClass: string;
      }[] = [
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
          scrollClass: "fe-dev",
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
          scrollClass: "pro-mngt",
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
          scrollClass: "cre-wri",
        },
      ];
    return ( <div id="what-i-do">
    <h1
      className="text-center font-bold text-3xl mb-8"
      id="w-text"
    >
      What I Do
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12">
      {doings.map((doin) => (
        <Card
          props={doin}
        />
      ))}
    </div>
  </div> );
}
 
export default WhatIDo;
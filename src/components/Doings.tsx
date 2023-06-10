import { useState } from "react";
import React from "react";
import Card from "./UI/Card";

import love from '../images/memojilove.png';
import meditate from '../images/memojimeditate.png';
import smile from '../images/memojismile.png';


const Doings = () =>{

    
const [doings, setdoings] = useState([
  {
    image: love,
    heading: "Frontend Development",
    summary: (
      <p>
        I build fast, beautiful, SEO friendly frontend applications that suites
        your every need. With <code>HTML</code>, <code>CSS</code>,{" "}
        <code>JavaScript</code>, <code>ReactJS</code>, and more.
      </p>
    ),
  },
  {
    image: meditate,
    heading: "Backend Development",
    summary: (
      <p>
        I build fast, beautiful, SEO friendly frontend applications that suites
        your every need. With <code>HTML</code>, <code>CSS</code>,{" "}
        <code>JavaScript</code>, <code>ReactJS</code>, and more.
      </p>
    ),
  },
  {
    image: smile,
    heading: "Article Writing",
    summary: (
      <p>
        I build fast, beautiful, SEO friendly frontend applications that suites
        your every need. With <code>HTML</code>, <code>CSS</code>,{" "}
        <code>JavaScript</code>, <code>ReactJS</code>, and more.
      </p>
    ),
  },
]);

    return (
      <div>
        <h1 className="text-center font-bold text-4xl mb-8">What I Do</h1>
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
    );
}

export default Doings;
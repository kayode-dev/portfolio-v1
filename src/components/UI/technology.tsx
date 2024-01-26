import React from "react";

const Technology = () => {

  const technologies: { image: any; name: string }[] = [
    { image: require("../../images/tech/h5.png"), name: "HTML5" },
    { image: require("../../images/tech/c3.png"), name: "CSS 3" },
    { image: require("../../images/tech/js.png"), name: "Javascript" },
    { image: require("../../images/tech/ts.png"), name: "Typescript" },
    { image: require("../../images/tech/twc.png"), name: "Tailwind CSS" },
    { image: require("../../images/tech/bs.png"), name: "Bootstrap" },
    { image: require("../../images/tech/blazor.png"), name: "Blazor" },
    { image: require("../../images/tech/rea.png"), name: "React" },
    { image: require("../../images/tech/dotnet.png"), name: ".NET" },
    { image: require("../../images/tech/firebase.png"), name: "Firebase" },
  ];

  return (<div className="flex flex-col">
    <h1 className="text-center font-bold text-3xl mb-8">Technologies</h1>
    <div className="w-[90%] md:w-full overflow-x-auto overflow-y-hidden">
      <div className="flex flex-row justify-evenly w-full">
        {technologies.map((tech) => (
          <div className="h-20 w-20 p-4 flex flex-col justify-center items-center text-center gap-4 doings rounded-lg card-img tech">
            <img
              src={tech.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>

  </div>);
}

export default Technology;
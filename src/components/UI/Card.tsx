import React from "react";

const Card = ({props}: {props:{scrollClass:string, image:string, heading:string, summary:string}}) => {
  return (
    <div className={`p-8 flex flex-col justify-center items-center text-center gap-4 doings rounded-2xl border border-white/20 card-img ${props.scrollClass}`}>
      <div className="h-1/2">
        <img src={props.image} alt="display" className="h-40 w-40" /> 
      </div>

      <div className="gap-4">
        <h2 className="text-2xl font-semibold">{props.heading}</h2>
        <p className="text-base leading-7 text-center text-green-800">{props.summary}</p>
      </div>
    </div>
  );
};

export default Card;

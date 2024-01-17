import React from "react";

const Card = (props: any) => {
  return (
    <div className="p-8 flex flex-col justify-center items-center text-center gap-4 shadow-2xl rounded-2xl card-img">
      <div className="h-1/2">
        <img src={props.img} alt="display" className="h-40 w-40" />
      </div>

      <div className="gap-4">
        <h2 className="text-2xl font-semibold">{props.heading}</h2>
        <p className="text-lg text-left text-green-800">{props.summary}</p>
      </div>
    </div>
  );
};

export default Card;

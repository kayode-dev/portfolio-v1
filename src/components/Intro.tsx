import React from "react";

import profpic from "../images/IMG_6729.jpg";

const Intro = () => {
  return (
    <div className="flex flex-col-reverse gap-4 items-center justify-between mb-10 md:flex-row">
      <div className=" w-full md:w-[65%] my-auto l intro-spacing gap-4">
        <h2 className="font-bold text-3xl">Kayode Babalola</h2>
        <p className="font-medium text-lg mb-2">
          Front-end Developer / Project Manager👨🏾‍💻
        </p>
        <p className="font-medium text-lg text-green-800">
          Hello! Im Kayode, a Front-end developer who loves impl ementing
          web-designs, meeting clients expectations and
          can easily center my <code>div</code>'s. I enjoy some of the
          challenges that come with programming, hence my underlying interest in
          becoming a Fullstack Developer. I also set and manage client expections,
          identify project goals, objectives and scope to create project plans
          as a Project Manager.
        </p>
      </div>
      <div className="w-40 h-40 md:w-56 md:h-56 border-green-800 border-4 rounded-full p-1">
        <img
          className="rounded-full"
          src={profpic}
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Intro;

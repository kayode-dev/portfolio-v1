import React from "react";
import Resume from "../documents/resume2.pdf";

const Rando = () => {
  return (
    <>
      <iframe
        title="resume"
        src={Resume}
        height="100%"
        width="100%"
        className="min-h-screen min-w-full max-h-screen max-w-full"
      />
    </>
  );
};

export default Rando;

import React from "react";
import Resume from "../documents/resume.pdf";

const Rando = () =>{


    return (<>
        <iframe title='resume' src={`${Resume}#view=fitH`} className="min-h-screen min-w-full max-h-screen max-w-full"/>
        </>)

}

export default Rando;
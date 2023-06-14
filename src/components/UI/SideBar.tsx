import React from "react";
import { Link } from "react-router-dom";

const SideBar = (props:any) =>{

    return (
      <div className="p-6 min-h-full top-0 left-0 fixed bg-green-800 flex flex-col scroll min-w-full z-10 md:hidden">
        <button
          className="h-14 w-14 rounded self-end"
          type="button"
          onClick={props.onCloseClick}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <ul className="bg-inherit w-full flex flex-col gap-9 place-items-center justify-center items-center min-h-screen">
          <li>
            <button onClick={props.onCloseClick}>
              <Link to="/">Home</Link>
            </button>
          </li>

          <li>
            <button onClick={props.onCloseClick}>
              <Link to="/rando">Resume</Link>
            </button>
          </li>

          <li>
            <button onClick={props.onCloseClick}>
              <Link to="/">Articles</Link>
            </button>
          </li>

          <li>
            <button onClick={props.onCloseClick}>
              <Link to="/">Contact Me</Link>
            </button>
          </li>
        </ul>
      </div>
    );

    }

    export default SideBar;
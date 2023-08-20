import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import ContactContext from "../../contexts/ContactScroll";

const SideBar = (props: any) => {
  const scrollToContact = useContext(ContactContext);
  const DisplayContact = () => {
    setTimeout(async () => {
      scrollToContact.Contact_sect_Location();
    }, 100);
  };

  return (
    <div
      className={
        "p-6 min-h-full top-0 left-0 fixed flex flex-col justify-around scroll min-w-full z-10 md:hidden " +
        props.colors
      }
    >
      <button
        className="h-10 w-10 rounded nav-link flex items-center justify-center self-end"
        type="button"
        onClick={props.onCloseClick}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <ul className="text-2xl bg-inherit w-full flex flex-col gap-9 place-items-center justify-start pt-20 items-center min-h-screen">
        <li>
          <button onClick={props.onCloseClick}>
            <Link to="/">Home</Link>
          </button>
        </li>
        <hr />

        <li>
          <button onClick={props.onCloseClick}>
            <Link to="/resume">Resume</Link>
          </button>
        </li>
        <hr />

        <li>
          <button onClick={props.onCloseClick}>
            <Link to="/articles">Articles</Link>
          </button>
        </li>
        <hr />

        <li>
          <button onClick={props.onCloseClick}>
            <Link to="/" onClick={DisplayContact}>
              Contact Me
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

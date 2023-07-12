import React, { useContext, useState } from "react";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

import SideBar from "./UI/SideBar";
import ContactContext from "../contexts/ContactScroll";

const NavBar: any = () => {
  const [thememode, setthememode] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showNav, setShowNav] = useState(false);
  let themeicon;
  let sidebar_color;

  if (!thememode) {
    setTheme("dark");
    themeicon = "light_mode";
    sidebar_color = "sidebar-dark";
  } else {
    setTheme("light");
    themeicon = "dark_mode";
    sidebar_color = "sidebar-light";
  }

  const navShowHandler: any = () => {
    setShowNav(!showNav);
  };

  const themeChangeHandler: any = () => {
    setthememode(!thememode);
  };

  const scrollToContact = useContext(ContactContext);

  const DisplayContact = () => {
    setTimeout(async () => {
      scrollToContact.Contact_sect_Location();
    }, 100);
  };

  return (
    <>
      <nav className="h-32 w-full flex justify-between font-medium text-base">
        {showNav ? (
          <SideBar onCloseClick={navShowHandler} colors={sidebar_color} />
        ) : (
          <button
            type="button"
            className=" w-10 h-10 justify-center flex items-center p-2 ml-3 my-auto rounded md:hidden nav-link"
            onClick={navShowHandler}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        )}
        <div
          className="w-3/5 hidden left-0 mt-32 min-h-full fixed z-20 bg-gray-100  justify-center items-center p-2 md:w-3/5 md:min-h-min md:dark:bg-inherit md:static md:mt-0 md:flex md:gap-4  md:justify-around"
          id="navbar-default"
        >
          <div className="h-auto w-auto py-2 px-3 rounded flex justify-center items-center nav-link">
            <Link to="/">Home</Link>
          </div>
          <div className="h-auto w-auto py-2 px-3 rounded flex justify-center items-center nav-link">
            <Link to="/resume">Resume</Link>
          </div>
          <div className="h-auto w-auto py-2 px-3 rounded flex justify-center items-center nav-link">
            <Link to=".">Articles</Link>
          </div>
          <div className="h-auto w-auto py-2 px-3 rounded flex justify-center items-center nav-link">
            <Link to="/" onClick={DisplayContact}>
              Contact Me
            </Link>
          </div>
        </div>
        <button
          className="w-10 h-10 rounded flex justify-center items-center  my-auto p-3 nav-link"
          onClick={themeChangeHandler}
        >
          <span className="material-symbols-outlined">{themeicon}</span>
        </button>
      </nav>
    </>
  );
};

export default NavBar;

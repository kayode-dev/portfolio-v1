import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Rando from "./rando";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const NavBar: any = () => {
  const [thememode, setthememode] = useState(false);
  const { theme, setTheme } = useTheme();
  let themeicon;
  let backdrop_brightness;

  if (!thememode) {
    setTheme("dark");
    themeicon = "light_mode";
    backdrop_brightness = 150;
  } else {
    setTheme("light");
    themeicon = "dark_mode";
    backdrop_brightness = 50;
  }

  const themeChangeHandler: any = () => {
    setthememode(!thememode);
  };
  return (
    <>
      <BrowserRouter>
        <nav className="h-32 w-full flex justify-between font-medium text-base">
          <div className='flex flex-col md:flex-row'>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden flex-col w-full  justify-between items-center p-2 md:flex md:flex-row md:justify-around"
              id="navbar-default"
            >
              <div
                className={
                  "h-auto w-auto py-2 px-3 rounded-md flex justify-center items-center  hover:backdrop-brightness-" +
                  backdrop_brightness
                }
              >
                <Link to="/">Home</Link>
              </div>
              <div
                className={
                  "h-auto w-auto py-2 px-3 rounded-md flex justify-center items-center  hover:backdrop-brightness-" +
                  backdrop_brightness
                }
              >
                <Link to="/rando">Resume</Link>
              </div>
              <div
                className={
                  "h-auto w-auto py-2 px-3 rounded-md flex justify-center items-center  hover:backdrop-brightness-" +
                  backdrop_brightness
                }
              >
                <Link to=".">Articles</Link>
              </div>
              <div
                className={
                  "h-auto w-auto py-2 px-3 rounded-md flex justify-center items-center  hover:backdrop-brightness-" +
                  backdrop_brightness
                }
              >
                <Link to=".">Contact Me</Link>
              </div>
            </div>
          </div>
          <button
            className={
              "w-14 h-14 rounded flex justify-center items-center  my-auto p-3 hover:backdrop-brightness-" +
              backdrop_brightness
            }
            onClick={themeChangeHandler}
          >
            <span className="material-symbols-outlined">{themeicon}</span>
          </button>
        </nav>

        <Routes>
          <Route index element={<Home />} />
          <Route path="rando" element={<Rando />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NavBar;

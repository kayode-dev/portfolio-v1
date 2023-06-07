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
          <div className="flex flex-row w-1/2  justify-around items-center p-2">
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
          <Route path="/" element={<NavBar />} />
          <Route index element={<Home />} />
          <Route path="rando" element={<Rando />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NavBar;

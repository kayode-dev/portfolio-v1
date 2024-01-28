import React from "react";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Rando from "./components/rando";
import Footer from "./components/UI/Footer";

const MyApp: any = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <main className=" flex flex-col px-6 lg:px-28 gap-10">
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="resume" element={<Rando />} />
          </Routes>
          <Footer />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default MyApp;

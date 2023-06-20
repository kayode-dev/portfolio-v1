import React from 'react';
import NavBar from './components/NavBar';
import { ThemeProvider } from 'next-themes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Rando from './components/rando';
import Footer from './components/UI/Footer';

const MyApp: any = () => {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <main className="w-full px-3 md:w-4/5 grid items-center mx-auto">
        <NavBar />

        
          <Routes>
            <Route index element={<Home />} />
            <Route path="rando" element={<Rando />} />
          </Routes>
        <Footer/>
      </main>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default MyApp;
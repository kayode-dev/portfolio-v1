import React from 'react';
import NavBar from './components/NavBar';
import { ThemeProvider } from 'next-themes';

const MyApp: any = () => {
  return (
    <ThemeProvider>
      <main className="w-full px-4 md:w-3/4 grid items-center mx-auto">
        <NavBar />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
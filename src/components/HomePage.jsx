'use client';

import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
import Services from './Services';

const HomePage = () => {
  return (
    <main className="bg-[#111] text-white font-['Nunito'] relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <About />
        <Services />:

      </div>
    </main>
  );
};

export default HomePage;



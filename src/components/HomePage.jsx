'use client';

import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
import Services from './Services';
import Clients from './Clients';
import BackgroundVideo from './BackgroundVideo';
import OurWorks from './OurWorks';
import Contact from './Contact';
import MouseImageTrail from './MouseImageTrail';
import Footer from './Footer';

const HomePage = () => {
  return (
    <main className="bg-[#111] text-white font-['Nunito'] relative overflow-hidden">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <About />
        <Services />
        <Clients />
        <OurWorks />
        <Contact />
        
        {/* MouseImageTrail as a standalone section */}
        <MouseImageTrail>
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Mouse Trail Gallery
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Move your cursor around to reveal our creative work.
              </p>
            </div>
          </div>
        </MouseImageTrail>
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;

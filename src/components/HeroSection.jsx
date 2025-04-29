'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Arrow from './Arrow';
import dynamic from 'next/dynamic';

// Import MatterBackground with no SSR to avoid hydration issues
const MatterBackground = dynamic(() => import('./MatterBackground'), {
  ssr: false,
});

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Social media links component
  const SocialLinks = () => (
    <ul className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
      <li>
        <Link href="https://www.linkedin.com/in/anurag-singh-8bb5ab205/" target="_blank">
          <svg
            className="w-5 sm:w-6 md:w-7 hover:text-white transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
            />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/anuragsinghbam" target="_blank">
          <svg
            className="w-5 sm:w-6 md:w-7 hover:text-white transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48z"
            />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/skz.creative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <svg 
            className="w-5 sm:w-6 md:w-7 hover:text-white transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
          >
            <path 
              fill="currentColor" 
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="#" target="_blank">
          <svg 
            className="w-5 sm:w-6 md:w-7 hover:text-white transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
          >
            <path 
              fill="currentColor" 
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="www.youtube.com/@SANSKARIEZZZ" target="_blank">
          <svg 
            className="w-5 sm:w-6 md:w-7 hover:text-white transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 576 512"
          >
            <path 
              fill="currentColor" 
              d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Matter.js background animation - contained within hero section */}
      <div className="absolute inset-0">
        <MatterBackground />
      </div>

      {/* Main content */}
      <div className="flex relative h-screen items-center justify-center">
        <div className="w-full px-4 max-w-screen-xl mx-auto">
          <div className="relative flex flex-col items-center justify-center">
            {/* Company Logo/Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pointer-events-none text-3xl sm:text-4xl md:text-[64px] font-['Spartan'] skz-heading text-center mb-4"
            >
              SKZ-CREATIVES
            </motion.h1>

            {/* Tagline with animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pointer-events-none font-['Merriweather'] italic my-3 md:my-8 text-center w-full max-w-md text-lg md:text-xl"
            >
              We Build What They'll Never Forget
            </motion.p>

            {/* About Us button with animation */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              onClick={scrollToAbout}
              className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative group mt-6"
            >
              About Us
              <Arrow className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 transition-all duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Social media links */}
        <SocialLinks />
      </div>
    </section>
  );
};

export default HeroSection;


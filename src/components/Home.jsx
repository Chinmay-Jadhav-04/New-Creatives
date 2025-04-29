import React from 'react';
import Head from 'next/head';
import Header from './Header';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <>
      <Head>
        <title>SKZ Creatives</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/jpeg" href="/assets/images/SKZ-Creatives-Logo-10.jpg" />
      </Head>
      
      <main className="bg-[#111] text-white font-['Nunito']">
        <Header />
        <HeroSection />
      </main>
    </>
  );
};

export default Home;

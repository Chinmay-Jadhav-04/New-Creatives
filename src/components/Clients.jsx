'use client';

import React from 'react';
import SlidingLogos from './SlidingLogos';

const Clients = () => {

  return (
    <section
      className="py-16 relative w-screen"
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        maxWidth: '100vw'
      }}
    >

      <div className="w-full relative z-10">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Trusted Clients</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've had the pleasure of working with amazing brands and organizations from around the world.
          </p>
        </div>

        <SlidingLogos />
      </div>
    </section>
  );
};

export default Clients;

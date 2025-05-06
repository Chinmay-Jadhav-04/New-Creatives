'use client';

import React from 'react';
import SlidingLogos from './SlidingLogos';

const Clients = () => {
  return (
    <section className="pt-8 pb-10 bg-gradient-to-b from-blue-900/30 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
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

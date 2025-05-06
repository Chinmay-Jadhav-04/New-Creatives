'use client';

import React from 'react';
import Image from 'next/image';

const SlidingLogos = () => {
  // Define the logos for both rows
  const row1Logos = [
    { id: 1, src: '/assets/images/oppo.png', alt: 'Oppo' },
    { id: 2, src: '/assets/images/rapido.png', alt: 'Rapido' },
    { id: 3, src: '/assets/images/medicover.png', alt: 'Medicover' },
    { id: 4, src: '/assets/images/urbangabru.png', alt: 'Urbangabru' },
    { id: 5, src: '/assets/images/realme.png', alt: 'Realme' },
    { id: 6, src: '/assets/images/monginis.png', alt: 'Monginis' },
    { id: 7, src: '/assets/images/celljoy.png', alt: 'Celljoy' },
    { id: 8, src: '/assets/images/maddock.png', alt: 'Maddock' },
    { id: 9, src: '/assets/images/bhadipa.png', alt: 'Bhadipa' },
    { id: 10, src: '/assets/images/zee-marathi.png', alt: 'Zee Marathi' },
    { id: 11, src: '/assets/images/jio.png', alt: 'Jio' },
    { id: 12, src: '/assets/images/jio-games.png', alt: 'Jio Games' },
  ];

  const row2Logos = [
    { id: 13, src: '/assets/images/boat.png', alt: 'Boat' },
    { id: 14, src: '/assets/images/google-india.png', alt: 'Google India' },
    { id: 15, src: '/assets/images/tata-ipl.png', alt: 'Tata Ipl' },
    { id: 16, src: '/assets/images/naukri.png', alt: 'Naukri' },
    { id: 17, src: '/assets/images/qlan.png', alt: 'Qlan' },
    { id: 18, src: '/assets/images/1xbet.png', alt: '1xBet' },
    { id: 19, src: '/assets/images/fairplay.png', alt: 'Fairplay' },
    { id: 20, src: '/assets/images/msi.png', alt: 'MSI' },
    { id: 21, src: '/assets/images/wartex.png', alt: 'Wartex' },
    { id: 22, src: '/assets/images/rage-coffee.png', alt: 'Rage Coffee' },
    { id: 23, src: '/assets/images/nvidia.png', alt: 'Nvidia' },
    { id: 24, src: '/assets/images/loco.png', alt: 'Loco' },
  ];

  // Function to render logo items with fallback
  const renderLogoItem = (logo) => {
    return (
      <div key={logo.id} className="logoItem" style={{ width: '180px' }}>
        <div className="relative flex items-center justify-center" style={{
          width: '120px',
          height: '60px',
          border: '1px solid rgba(150, 150, 150, 0.3)',
          borderRadius: '8px',
          padding: '8px',
          backgroundColor: 'rgba(50, 50, 50, 0.2)'
        }}>
          {/* Try to load the image but have a fallback */}
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={45}
            className="logoImage"
            onError={(e) => {
              // If image fails to load, replace with placeholder
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Placeholder that shows if image fails to load */}
          <div
            className="logoPlaceholder"
            style={{ display: 'none' }}
          >
            {logo.alt}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="logosContainer">
        <div className="logosRow row1">
          {row1Logos.map(renderLogoItem)}
        </div>
      </div>

      <div className="logosContainer">
        <div className="logosRow row2">
          {row2Logos.map(renderLogoItem)}
        </div>
      </div>
    </div>
  );
};

export default SlidingLogos;

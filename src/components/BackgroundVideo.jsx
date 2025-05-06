'use client';

import React, { useState, useEffect, useRef } from 'react';

const BackgroundVideo = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Video loading effect
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        console.log("Video loaded successfully");
      };

      videoRef.current.onerror = (e) => {
        console.error("Video error:", e);
        setVideoError(true);
      };
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
      {videoError ? (
        <div className="w-full h-full bg-gradient-to-r from-[#33103e] to-[#271b50]"></div>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full min-h-screen min-w-screen"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={() => {
              console.error("Video failed to load");
              setVideoError(true);
            }}
          >
            <source src="/AboutBg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Black overlay for better text visibility */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </>
      )}
    </div>
  );
};

export default BackgroundVideo;

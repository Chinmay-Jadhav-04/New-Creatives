'use client';
import React, { useEffect, useRef } from 'react';

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const elements = container.querySelectorAll('.parallax-element');
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      elements.forEach((el) => {
        // Get the data-speed attribute or use 50 as default
        const speed = el.getAttribute('data-speed') || 50;
        
        // Calculate the transform values based on mouse position and speed
        const transformX = x * speed;
        const transformY = y * speed;
        
        // Apply the transform
        el.style.transform = `translate(${transformX}px, ${transformY}px)`;
      });
    };
    
    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Background elements that will move with parallax effect */}
      <div 
        className="parallax-element absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500 rounded-full opacity-20"
        data-speed="20"
      ></div>
      <div 
        className="parallax-element absolute top-3/4 left-2/3 w-16 h-16 bg-purple-500 rounded-full opacity-20"
        data-speed="40"
      ></div>
      <div 
        className="parallax-element absolute top-1/2 left-1/3 w-12 h-12 bg-green-500 rounded-full opacity-20"
        data-speed="30"
      ></div>
      <div 
        className="parallax-element absolute top-1/3 right-1/4 w-20 h-20 bg-yellow-500 rounded-full opacity-20"
        data-speed="50"
      ></div>
      <div 
        className="parallax-element absolute bottom-1/4 right-1/3 w-10 h-10 bg-red-500 rounded-full opacity-20"
        data-speed="60"
      ></div>
      
      {/* Add more elements as needed */}
    </div>
  );
};

export default ParallaxBackground;
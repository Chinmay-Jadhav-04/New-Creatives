import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the current device is a mobile device
 * @param {number} breakpoint - The breakpoint width to consider as mobile (default: 768px)
 * @returns {boolean} - True if the device is mobile, false otherwise
 */
export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
}

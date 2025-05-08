'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

// Define the BarLoader component inline
const barLoaderVariants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={barLoaderVariants} className="h-12 w-2 bg-white" />
      <motion.div variants={barLoaderVariants} className="h-12 w-2 bg-white" />
      <motion.div variants={barLoaderVariants} className="h-12 w-2 bg-white" />
      <motion.div variants={barLoaderVariants} className="h-12 w-2 bg-white" />
      <motion.div variants={barLoaderVariants} className="h-12 w-2 bg-white" />
    </motion.div>
  );
};

const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Show loading indicator on initial load and route changes
  useEffect(() => {
    // Set loading to true on initial load or route change
    setIsLoading(true);
    
    // Hide loader after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <BarLoader />
    </div>
  );
};

export default LoadingOverlay;

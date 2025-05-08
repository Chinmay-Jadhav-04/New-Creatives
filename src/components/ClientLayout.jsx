'use client';
import React from 'react';
import LoadingOverlay from './LoadingOverlay';

const ClientLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <LoadingOverlay />
      {children}
    </div>
  );
};

export default ClientLayout;

'use client';
import React from 'react';

const ClientLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default ClientLayout;


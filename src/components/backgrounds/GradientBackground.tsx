import React from 'react';

export const GradientBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/30 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </>
  );
};
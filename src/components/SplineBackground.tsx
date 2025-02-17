import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const SplineFallback = () => (
  <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-900/20 to-black/40" />
);

export const SplineBackground = () => {
  return (
    <Suspense fallback={<SplineFallback />}>
      <div className="absolute inset-0 z-0">
        <Spline 
          scene="https://prod.spline.design/animatedwave-a064caab0c719a742d1f5e9dfbe46e15/scene.splinecode"
          className="w-full h-full"
          onError={(error) => {
            console.error('Spline loading error:', error);
            return <SplineFallback />;
          }}
        />
      </div>
    </Suspense>
  );
};
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const WaveMesh = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();
    
    // Update vertices to create wave effect
    const position = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const wave = Math.sin(x * 2 + time) * 0.2 + 
                   Math.sin(y * 2 + time) * 0.2;
      position.setZ(i, wave);
    }
    position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[15, 15, 32, 32]} />
      <meshStandardMaterial
        color="#9333ea"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

export const WaveBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 5, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <WaveMesh />
      </Canvas>
    </div>
  );
};
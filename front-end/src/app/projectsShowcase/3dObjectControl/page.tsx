'use client';

import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Sky, OrbitControls, PerspectiveCamera} from '@react-three/drei';
import {Physics} from '@react-three/cannon';
import Robot from '@/app/projectsShowcase/3dObjectControl/components/robot';
import Ground from '@/app/projectsShowcase/3dObjectControl/components/ground';

export default function ThreeObjectControl() {
  const color = 0xffffff;
  return (
    <>
      <div className='container flex h-full gap-6 py-6'>
        <Canvas
          shadows
          camera={{position: [-1, 5, 5], fov: 45}}
          style={{background: 'lightgray', width: '100vw', height: '65vh'}}
        >
          <Sky azimuth={1} inclination={0.8} distance={1000} />
          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            shadow-mapSize={[2048, 2048]}
            //shadow-camera={[150, 150, -150, -150]}
          ></directionalLight>
          <ambientLight color={color} intensity={1} />
          <Physics>
            <Robot />
            <Ground />
          </Physics>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export const metadata = {
  title: '3D Object Control',
};

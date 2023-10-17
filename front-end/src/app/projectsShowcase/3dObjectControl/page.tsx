'use client';

import React from 'react';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import {Sky, OrbitControls, PerspectiveCamera} from '@react-three/drei';
import Robot from '@/app/projectsShowcase/3dObjectControl/components/robot';

export default function ThreeObjectControl() {
  const color = 0xffffff;
  return (
    <>
      <div className='container flex h-full gap-6 py-6'>
        <Canvas
          camera={{position: [0, 0, 0]}}
          style={{background: 'lightgray', width: '100vw', height: '65vh'}}
        >
          <Sky azimuth={1} inclination={0.8} distance={1000} />
          <directionalLight color={color} intensity={1} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <ambientLight color={color} intensity={1} />
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
          <Robot />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export const metadata = {
  title: '3D Object Control',
};

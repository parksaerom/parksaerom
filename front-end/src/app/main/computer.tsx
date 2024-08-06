'use client';

import React, {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {Html, OrbitControls, Preload, useGLTF} from '@react-three/drei';

import {isMobileScreen} from '@/utils/device';
import {BiLoaderAlt} from 'react-icons/bi';

export default function ComputersCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const computer = useGLTF('/three/computer.glb');

  useEffect(() => {
    const updateDeviceType = () => {
      const mobile = isMobileScreen();
      setIsMobile(mobile);
    };

    updateDeviceType();
    window.addEventListener('resize', updateDeviceType);

    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Canvas
          frameloop='demand'
          dpr={[1, 2]}
          camera={{fov: 50}}
          gl={{preserveDrawingBuffer: true}}
          shadows
        >
          <Suspense
            fallback={
              <Html>
                <BiLoaderAlt className='mr-2 mt-10 h-24 w-24 animate-spin' />
              </Html>
            }
          >
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <mesh>
              <hemisphereLight intensity={3} />
              <pointLight intensity={5} />
              <primitive
                object={computer.scene}
                scale={1.4}
                position={[0, -1.6, -1]}
              />
            </mesh>
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
}

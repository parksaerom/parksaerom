'use client';

import React, {Suspense, useEffect, useRef, useState} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {Html, OrbitControls, Preload, useGLTF} from '@react-three/drei';

import {isMobileScreen} from '@/utils/device';
import {BiLoaderAlt} from 'react-icons/bi';

function Computer() {
  const computer = useGLTF('/three/computer.glb');
  const computerMesh = useRef<THREE.Mesh>(null);
  const floatSpeed = 0.9;

  useFrame(({clock}) => {
    if (computerMesh.current) {
      const elapsedTime = clock.getElapsedTime();
      computerMesh.current.position.y =
        Math.sin(elapsedTime * floatSpeed) * 0.1; // 부유하는 높이 조절
    }
  });

  return (
    <mesh ref={computerMesh}>
      <hemisphereLight intensity={3} />
      <pointLight intensity={5} />
      <primitive object={computer.scene} scale={1.4} position={[0, -1.6, -1]} />
    </mesh>
  );
}

export default function ComputersCanvas() {
  const [isMobile, setIsMobile] = useState(false);

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
          dpr={[1, 2]}
          camera={{fov: 50}}
          gl={{preserveDrawingBuffer: true}}
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
            <Computer />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
}
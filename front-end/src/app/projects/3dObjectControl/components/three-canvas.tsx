'use client';

import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Sky, OrbitControls, PerspectiveCamera, Html} from '@react-three/drei';
import {Physics} from '@react-three/cannon';
import Cat from '@/app/projects/3dObjectControl/components/cat';
import Ground from '@/app/projects/3dObjectControl/components/ground';
import House from '@/app/projects/3dObjectControl/components/house';
import Room from '@/app/projects/3dObjectControl/components/room';
import {useSelector, selectInside} from '@/lib/redux';

type controlOptionsType = {
  keys: string[];
  action: string;
};

export default function ThreeCanvas() {
  const inside = useSelector(selectInside);
  const controlOptions: controlOptionsType[] = [
    {keys: ['↑', 'W'], action: 'Forward'},
    {keys: ['←', 'A'], action: 'Left'},
    {keys: ['→', 'D'], action: 'Right'},
    {keys: ['↓', 'S'], action: 'Backward'},
    {keys: ['Space'], action: 'Jump'},
    {keys: ['B'], action: 'Enter/Exit'},
  ];

  return (
    <Canvas shadows style={{width: '100vw', height: '65vh'}}>
      {inside ? (
        <color attach='background' args={['#fff3ab']} />
      ) : (
        <Sky azimuth={1} inclination={0.8} distance={1000} />
      )}
      <Html fullscreen className='flex select-none items-end'>
        {controlOptions.map(({keys, action}) => (
          <span key={action} className='my-2 items-center'>
            <span className='ml-3 text-sm'>{action}: </span>
            {keys.map((key) => (
              <span
                className='items-center justify-center rounded border border-b-[3px] border-gray-500 bg-white px-2 py-1 text-xs text-black'
                key={key}
              >
                {key}
              </span>
            ))}
          </span>
        ))}
      </Html>
      <PerspectiveCamera makeDefault fov={45} position={[-30, 35, 15]} />
      <directionalLight position={[3.5, 10, 1]}></directionalLight>
      <ambientLight color={0xffffff} intensity={1} />
      <Physics>
        <Cat />
        <Ground />
        {inside ? (
          <Room position={[0, -1.5, 0]} />
        ) : (
          <House position={[10, -2, 3.5]} />
        )}
      </Physics>
      <OrbitControls />
    </Canvas>
  );
}

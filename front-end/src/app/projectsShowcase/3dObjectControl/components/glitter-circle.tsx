import {MeshProps, useFrame} from '@react-three/fiber';
import {useRef} from 'react';
import * as THREE from 'three';

export default function GlitterCircle({args, ...props}: MeshProps) {
  const circleMesh = useRef<THREE.Mesh>(null);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/images/glitter-ring-circle.png');
  useFrame(() => {
    if (circleMesh.current) {
      circleMesh.current.rotation.z += 0.03;
    }
  });

  return (
    <mesh ref={circleMesh} {...props}>
      <circleGeometry args={[1.7, 32]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

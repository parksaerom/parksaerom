import * as THREE from 'three';
import React, {useRef, useState, useEffect} from 'react';
import {useGLTF, useAnimations} from '@react-three/drei';
import {GLTF} from 'three-stdlib';
import {useFrame} from '@react-three/fiber';

type RobotGLTFResult = GLTF & {
  nodes: {
    Sphere_0: THREE.SkinnedMesh;
    Sphere_1: THREE.SkinnedMesh;
    Sphere_2: THREE.SkinnedMesh;
    Sphere_3: THREE.SkinnedMesh;
    Armature001_rootJoint: THREE.Bone;
  };
  materials: {
    plastic: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = 'shake';
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']
  >
>;

export default function Robot(props: JSX.IntrinsicElements['group']) {
  const robotRef = useRef<THREE.Group | null>(null);
  const {nodes, materials, animations} = useGLTF(
    '/three/robot.glb',
  ) as RobotGLTFResult;
  const {actions} = useAnimations(animations, robotRef);
  const [isMoving, setIsMoving] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  useFrame(() => {
    if (robotRef.current) {
      const speed = 0.01;
      const newPosition = [...robotRef.current.position];
      const newRotation = [...robotRef.current.rotation];

      if (isMoving.up) {
        newRotation[1] = 0;
        newPosition[2] -= speed;
        robotFadeIn();
      }
      if (isMoving.down) {
        newRotation[1] = Math.PI;
        newPosition[2] += speed;
        robotFadeIn();
      }
      if (isMoving.left) {
        newRotation[1] = Math.PI / 2;
        newPosition[0] -= speed;
        robotFadeIn();
      }
      if (isMoving.right) {
        newRotation[1] = -Math.PI / 2;
        newPosition[0] += speed;
        robotFadeIn();
      }

      if (typeof newRotation[1] == 'number')
        robotRef.current.rotation.set(0, newRotation[1], 0);
      robotRef.current.position.fromArray(newPosition);
    }
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setIsMoving((prev) => ({...prev, up: true}));
        break;
      case 'ArrowDown':
        setIsMoving((prev) => ({...prev, down: true}));
        break;
      case 'ArrowLeft':
        setIsMoving((prev) => ({...prev, left: true}));
        break;
      case 'ArrowRight':
        setIsMoving((prev) => ({...prev, right: true}));
        break;
      default:
        break;
    }
  };

  const robotFadeIn = () => {
    if (!actions?.shake?.isRunning())
      actions?.shake?.reset().fadeIn(0.5).play();
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setIsMoving((prev) => ({...prev, up: false}));
        actions?.shake?.reset().fadeOut(0.5);
        break;
      case 'ArrowDown':
        setIsMoving((prev) => ({...prev, down: false}));
        actions?.shake?.reset().fadeOut(0.5);
        break;
      case 'ArrowLeft':
        setIsMoving((prev) => ({...prev, left: false}));
        actions?.shake?.reset().fadeOut(0.5);
        break;
      case 'ArrowRight':
        setIsMoving((prev) => ({...prev, right: false}));
        actions?.shake?.reset().fadeOut(0.5);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <group ref={robotRef} {...props}>
      <group name='Sketchfab_Scene'>
        <group name='Root' rotation={[-Math.PI / 2, 0, 0]} scale={0.147}>
          <group name='Armature001'>
            <primitive object={nodes.Armature001_rootJoint} />
            <skinnedMesh
              receiveShadow
              castShadow
              name='Sphere_0'
              geometry={nodes.Sphere_0.geometry}
              material={materials.plastic}
              skeleton={nodes.Sphere_0.skeleton}
            />
            <skinnedMesh
              receiveShadow
              castShadow
              name='Sphere_1'
              geometry={nodes.Sphere_1.geometry}
              material={materials['Material.001']}
              skeleton={nodes.Sphere_1.skeleton}
            />
            <skinnedMesh
              receiveShadow
              castShadow
              name='Sphere_2'
              geometry={nodes.Sphere_2.geometry}
              material={materials['Material.002']}
              material-color={'pink'}
              skeleton={nodes.Sphere_2.skeleton}
            />
            <skinnedMesh
              name='Sphere_3'
              geometry={nodes.Sphere_3.geometry}
              material={materials.plastic}
              skeleton={nodes.Sphere_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/three/robot.glb');

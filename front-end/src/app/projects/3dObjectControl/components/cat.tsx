import * as THREE from 'three';
import React, {useRef, useState, useEffect} from 'react';
import {useGLTF, useAnimations, Html} from '@react-three/drei';
import {GLTF} from 'three-stdlib';
import {useFrame} from '@react-three/fiber';
import {useCylinder, CylinderProps, Triplet} from '@react-three/cannon';
import {
  selectInside,
  selectShowText,
  setInside,
  setShowText,
  useDispatch,
  useSelector,
} from '@/lib/redux';
import {Alert, AlertTitle} from '@/components/ui/alert';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type CatGLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    Object_11: THREE.SkinnedMesh;
    Object_13: THREE.SkinnedMesh;
    Object_14: THREE.SkinnedMesh;
    Object_16: THREE.SkinnedMesh;
    Object_17: THREE.SkinnedMesh;
    Object_19: THREE.SkinnedMesh;
    Object_20: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    ['Material.002']: THREE.MeshBasicMaterial;
    ['Material.006']: THREE.MeshBasicMaterial;
    ['Material.003']: THREE.MeshBasicMaterial;
    ['Material.005']: THREE.MeshBasicMaterial;
    ['Material.004']: THREE.MeshBasicMaterial;
    ['Material.001']: THREE.MeshBasicMaterial;
    ['Material.007']: THREE.MeshBasicMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = 'walk';

type CatMoving = {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
};

export default function Cat({args, ...props}: CylinderProps) {
  const {nodes, materials, animations} = useGLTF(
    '/three/banana-cat.glb',
  ) as CatGLTFResult;
  const dispatch = useDispatch();
  const inside = useSelector(selectInside);
  const showText = useSelector(selectShowText);
  const catDefaltPosition: Triplet = [-13, 1, 2];
  const catPosition = useRef(catDefaltPosition);
  const catRotation = useRef([0, 0, 0]);
  const [catRef, api] = useCylinder(() => ({
    mass: 100,
    velocity: [0, 0, 0],
    args: [0.4, 0.9, 1.5, 10],
    position: catDefaltPosition,
    ...props,
  }));
  const {actions} = useAnimations(animations, catRef);
  const [isMoving, setIsMoving] = useState<CatMoving>({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  useEffect(() => api.position.subscribe((v) => (catPosition.current = v)), []);

  useEffect(() => api.rotation.subscribe((v) => (catRotation.current = v)), []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  useFrame(() => {
    const speed = 0.07;
    const newPosition = catPosition.current;
    const newRotation = catRotation.current;
    const minX = -20;
    const maxX = 20;
    const minZ = -20;
    const maxZ = 20;

    if (
      (!inside &&
        catPosition.current[0] >= 0.5 &&
        catPosition.current[0] <= 3 &&
        catPosition.current[2] >= 1 &&
        catPosition.current[2] <= 3.5) ||
      (inside &&
        catPosition.current[0] >= -18 &&
        catPosition.current[0] <= -15 &&
        catPosition.current[2] >= 0 &&
        catPosition.current[2] <= 3)
    ) {
      dispatch(setShowText(true));
    } else {
      dispatch(setShowText(false));
    }

    if (isMoving.up || isMoving.down || isMoving.left || isMoving.right) {
      if (isMoving.up) {
        newRotation[1] = Math.PI / 2;
        newPosition[0] += speed;
      }
      if (isMoving.down) {
        newRotation[1] = -Math.PI / 2;
        newPosition[0] -= speed;
      }
      if (isMoving.left) {
        newRotation[1] = Math.PI;
        newPosition[2] -= speed;
      }
      if (isMoving.right) {
        newRotation[1] = 0;
        newPosition[2] += speed;
      }

      newPosition[0] = Math.max(minX, Math.min(maxX, newPosition[0]));
      newPosition[2] = Math.max(minZ, Math.min(maxZ, newPosition[2]));

      robotFadeIn();
      api.rotation.set(0, newRotation[1], 0);
      api.position.set(newPosition[0], newPosition[1], newPosition[2]);
    }
  });

  function handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Up':
      case 'ArrowUp':
      case 'w':
        setIsMoving((prev) => ({...prev, up: true}));
        break;
      case 'Down':
      case 'ArrowDown':
      case 's':
        setIsMoving((prev) => ({...prev, down: true}));
        break;
      case 'Left':
      case 'ArrowLeft':
      case 'a':
        setIsMoving((prev) => ({...prev, left: true}));
        break;
      case 'Right':
      case 'ArrowRight':
      case 'd':
        setIsMoving((prev) => ({...prev, right: true}));
        break;
      case 'b':
        if (
          !inside &&
          catPosition.current[0] >= 0.5 &&
          catPosition.current[0] <= 3 &&
          catPosition.current[2] >= 1 &&
          catPosition.current[2] <= 3.5
        ) {
          dispatch(setInside(true));
          api.rotation.set(0, 1, 0);
          api.position.set(
            catDefaltPosition[0],
            catDefaltPosition[1],
            catDefaltPosition[2],
          );
        } else if (
          inside &&
          catPosition.current[0] >= -18 &&
          catPosition.current[0] <= -15 &&
          catPosition.current[2] >= 0 &&
          catPosition.current[2] <= 3
        ) {
          dispatch(setInside(false));
          api.rotation.set(0, -Math.PI / 2, 0);
          api.position.set(1, 5, 2);
        }
        break;
      default:
        break;
    }
    if (event.key === ' ' || event.key === 'Spacebar') {
      api.velocity.set(0, 10, 0);
    }
  }

  function robotFadeIn() {
    if (!actions?.walk?.isRunning()) actions?.walk?.reset().fadeIn(1).play();
  }

  function handleKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case 'Up':
      case 'ArrowUp':
      case 'w':
        setIsMoving((prev) => ({...prev, up: false}));
        actions?.walk?.reset().fadeOut(0.5);
        break;
      case 'Down':
      case 'ArrowDown':
      case 's':
        setIsMoving((prev) => ({...prev, down: false}));
        actions?.walk?.reset().fadeOut(0.5);
        break;
      case 'Left':
      case 'ArrowLeft':
      case 'a':
        setIsMoving((prev) => ({...prev, left: false}));
        actions?.walk?.reset().fadeOut(0.5);
        break;
      case 'Right':
      case 'ArrowRight':
      case 'd':
        setIsMoving((prev) => ({...prev, right: false}));
        actions?.walk?.reset().fadeOut(0.5);
        break;
      default:
        break;
    }
  }

  return (
    <group ref={catRef as React.Ref<THREE.Group>} scale={2}>
      {showText && (
        <Html>
          <Alert className='left-[-48%] top-10 flex h-8 w-36 items-center justify-center opacity-70'>
            <AlertTitle className='mb-0 text-sm'>
              Press
              <span className='mx-1 items-center justify-center rounded border border-b-[3px] border-gray-500 bg-white px-1 text-xs text-black'>
                B
              </span>
              key
            </AlertTitle>
          </Alert>
        </Html>
      )}
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='metarig_26' position={[0, -0.7, 0]}>
                <group name='GLTF_created_0'>
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name='Object_7'
                    geometry={nodes.Object_7.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name='Object_8'
                    geometry={nodes.Object_8.geometry}
                    material={materials['Material.006']}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name='Object_10'
                    geometry={nodes.Object_10.geometry}
                    material={materials['Material.003']}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name='Object_11'
                    geometry={nodes.Object_11.geometry}
                    material={materials['Material.006']}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name='Object_13'
                    geometry={nodes.Object_13.geometry}
                    material={materials['Material.005']}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name='Object_14'
                    geometry={nodes.Object_14.geometry}
                    material={materials['Material.006']}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name='Object_16'
                    geometry={nodes.Object_16.geometry}
                    material={materials['Material.004']}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name='Object_17'
                    geometry={nodes.Object_17.geometry}
                    material={materials['Material.006']}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name='Object_19'
                    geometry={nodes.Object_19.geometry}
                    material={materials['Material.001']}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name='Object_20'
                    geometry={nodes.Object_20.geometry}
                    material={materials['Material.007']}
                    skeleton={nodes.Object_20.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/three/banana-cat.glb');

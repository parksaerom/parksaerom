import {usePlane} from '@react-three/cannon';
import {RepeatWrapping, TextureLoader} from 'three';
import {useGLTF} from '@react-three/drei';
import {GLTF} from 'three-stdlib';

type RocksGLTFResult = GLTF & {
  nodes: {
    rocksA_forest: THREE.Mesh;
  };
  materials: {
    ['Stone.007']: THREE.MeshStandardMaterial;
  };
};

type BeechTreeGLTFResult = GLTF & {
  nodes: {
    ['tree-beech']: THREE.Mesh;
  };
  materials: {
    color_main: THREE.MeshStandardMaterial;
  };
};
type LimeTreeGLTFResult = GLTF & {
  nodes: {
    ['tree-lime']: THREE.Mesh;
  };
  materials: {
    color_main: THREE.MeshStandardMaterial;
  };
};

export default function Ground(props: JSX.IntrinsicElements['mesh']) {
  const groundTexture = new TextureLoader().load('/images/grass.jpg');
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));
  const {nodes: rocksNodes, materials: rocksMaterials} = useGLTF(
    '/three/rocks.glb',
  ) as RocksGLTFResult;
  const {nodes: beechTreeNodes, materials: beechTreeMaterials} = useGLTF(
    '/three/beech-tree.glb',
  ) as BeechTreeGLTFResult;
  const {nodes: limeTreeNodes, materials: limeTreeMaterials} = useGLTF(
    '/three/lime-tree.glb',
  ) as LimeTreeGLTFResult;

  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(4500, 4500);

  return (
    <mesh ref={ref} {...props} receiveShadow>
      <planeGeometry args={[4500, 4500]} />
      <shadowMaterial color='#171717' transparent opacity={0.4} />
      <meshStandardMaterial map={groundTexture} />
      <mesh
        receiveShadow
        castShadow
        geometry={rocksNodes.rocksA_forest.geometry}
        material={rocksMaterials['Stone.007']}
        rotation={[-Math.PI / 1, 0, 0]}
        position={[3, 0, 0]}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={beechTreeNodes['tree-beech'].geometry}
        material={beechTreeMaterials.color_main}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.3}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={limeTreeNodes['tree-lime'].geometry}
        material={limeTreeMaterials.color_main}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.3}
        position={[5, -3, 0]}
      />
    </mesh>
  );
}

useGLTF.preload('/three/rocks.glb');
useGLTF.preload('/three/beech-tree.glb');
useGLTF.preload('/three/lime-tree.glb');

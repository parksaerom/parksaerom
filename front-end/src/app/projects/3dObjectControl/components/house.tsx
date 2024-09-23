import * as THREE from 'three';
import {useGLTF} from '@react-three/drei';
import {GLTF} from 'three-stdlib';
import {useCylinder} from '@react-three/cannon';
import type {CylinderProps} from '@react-three/cannon';
import GlitterCircle from '@/app/projects/3dObjectControl/components/glitter-circle';
type HouseGLTFResult = GLTF & {
  nodes: {
    [nodeName: string]: THREE.Mesh;
    Windows001_Window_0: THREE.Mesh;
    Windows_Window_0: THREE.Mesh;
    Windows002_Window_0: THREE.Mesh;
    SideRoofBase_RoofMoss_0: THREE.Mesh;
    RoofMoss_RoofMoss_0: THREE.Mesh;
    Roof009_RoofMoss_0: THREE.Mesh;
    RoofBase001_RoofMoss_0: THREE.Mesh;
    HouseFence_WoodPlanks_0: THREE.Mesh;
    Stairs_WoodPlanks_0: THREE.Mesh;
    HouseSupportBeams_WoodPlanks_0: THREE.Mesh;
    HouseWoodFloor_WoodPlanks_0: THREE.Mesh;
    Chimney_RoofMoss_0: THREE.Mesh;
    Moss_WoodPlanks_0: THREE.Mesh;
    DoorRoof_RoofMoss_0: THREE.Mesh;
    House_House_0: THREE.Mesh;
    TallGrass_GrassALPHA_0: THREE.Mesh;
    Vines001_GrassALPHA_0: THREE.Mesh;
    Vines002_GrassALPHA_0: THREE.Mesh;
    Vines003_GrassALPHA_0: THREE.Mesh;
    Vines004_GrassALPHA_0: THREE.Mesh;
    Vines005_GrassALPHA_0: THREE.Mesh;
    Vines_GrassALPHA_0: THREE.Mesh;
    SupportBeams_Window_0: THREE.Mesh;
    FenceRight_WoodFence_0: THREE.Mesh;
    FenceRight015_WoodFence_0: THREE.Mesh;
    FenceLeft_WoodFence_0: THREE.Mesh;
    FenceRight003_WoodFence_0: THREE.Mesh;
    SmallRocks_BigRock_0: THREE.Mesh;
    Rocks_BigRock_0: THREE.Mesh;
    BTree001_BrichTree_0: THREE.Mesh;
    BTree_BrichTree_0: THREE.Mesh;
    BTree002_BrichTree_0: THREE.Mesh;
    Redwood_BrichTree_0: THREE.Mesh;
    RedwoodAlpha_TreeLeafs_0: THREE.Mesh;
    RedwoodChopped_BrichTree_0: THREE.Mesh;
    RedwoodMoss_BrichTree_0: THREE.Mesh;
    Stump001_WoodFence_0: THREE.Mesh;
    Stump002_WoodFence_0: THREE.Mesh;
    Stump003_WoodFence_0: THREE.Mesh;
    Stump_WoodFence_0: THREE.Mesh;
    Ground_Ground_0: THREE.Mesh;
    GrassOrange_GrassALPHA_0: THREE.Mesh;
    GrassRoof_GrassALPHA_0: THREE.Mesh;
    GrassGround_GrassALPHA_0: THREE.Mesh;
    GrassRoof001_GrassALPHA_0: THREE.Mesh;
    Plane001_GrassALPHA_0: THREE.Mesh;
    Plane002_GrassALPHA_0: THREE.Mesh;
    Plane005_GrassALPHA_0: THREE.Mesh;
    Plane006_GrassALPHA_0: THREE.Mesh;
    Plane007_GrassALPHA_0: THREE.Mesh;
    Plane008_GrassALPHA_0: THREE.Mesh;
    Plane009_GrassALPHA_0: THREE.Mesh;
    Plane010_GrassALPHA_0: THREE.Mesh;
    Racoon_Animals_0: THREE.Mesh;
    Bird_Animals_0: THREE.Mesh;
    Bird001_Animals_0: THREE.Mesh;
    Bird002_Animals_0: THREE.Mesh;
    GroundPlane_Plane_0: THREE.Mesh;
    Powerlines_WoodFence_0: THREE.Mesh;
    Powerlines001_GrassALPHA_0: THREE.Mesh;
  };
  materials: {
    Window: THREE.MeshBasicMaterial;
    RoofMoss: THREE.MeshBasicMaterial;
    WoodPlanks: THREE.MeshBasicMaterial;
    House: THREE.MeshBasicMaterial;
    GrassALPHA: THREE.MeshBasicMaterial;
    WoodFence: THREE.MeshBasicMaterial;
    BigRock: THREE.MeshBasicMaterial;
    BrichTree: THREE.MeshBasicMaterial;
    TreeLeafs: THREE.MeshBasicMaterial;
    Ground: THREE.MeshBasicMaterial;
    Animals: THREE.MeshBasicMaterial;
    Plane: THREE.MeshBasicMaterial;
  };
};

function HillPhysicsObject({args, ...props}: CylinderProps) {
  const [ref] = useCylinder(
    () => ({type: 'Static', args, ...props}),
    undefined,
    [args, props],
  );
  return (
    <mesh ref={ref as React.MutableRefObject<THREE.Mesh>} visible={false}>
      <cylinderGeometry args={args} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function House(props: JSX.IntrinsicElements['group']) {
  const {nodes, materials} = useGLTF(
    '/three/forest-house.glb',
  ) as HouseGLTFResult;

  return (
    <group {...props}>
      <HillPhysicsObject args={[7.5, 7.5, 5.5, 50]} position={[6, 0.5, 0.5]} />
      <GlitterCircle
        position={[-9.5, 5.5, -1]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <group scale={0.04}>
        <mesh>
          <mesh
            geometry={nodes.Windows001_Window_0.geometry}
            material={materials.Window}
            position={[-29.37, 190.52, -176.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Windows_Window_0.geometry}
            material={materials.Window}
            position={[-163.4, 264.29, -120.46]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Windows002_Window_0.geometry}
            material={materials.Window}
            position={[-32.37, 214.07, 45.68]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.SideRoofBase_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-94.24, 237.15, -218.08]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RoofMoss_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-84.56, 400.35, -46.87]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Roof009_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-94.71, 404.74, -53.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RoofBase001_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-79.65, 389.72, -64.28]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.HouseFence_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-242.3, 149.2, -75.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stairs_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-287.11, 99.57, -139.09]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.HouseSupportBeams_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-199.34, 114.96, -78.75]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.HouseWoodFloor_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-144.55, 131.33, -86.31]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Chimney_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-9.02, 511.9, 16.75]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Moss_WoodPlanks_0.geometry}
            material={materials.WoodPlanks}
            position={[-201.25, 158.93, -135.53]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.DoorRoof_RoofMoss_0.geometry}
            material={materials.RoofMoss}
            position={[-201.53, 278.94, -23.1]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.House_House_0.geometry}
            material={materials.House}
            position={[-123.98, 269.22, -49.26]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.TallGrass_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-235.48, 129.6, -16.82]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines001_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-262.53, 118.89, -198.82]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines002_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-221.35, 257.52, -17.51]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines003_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-75.13, 260.82, 69.65]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines004_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[35.94, 470.14, -54.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines005_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[34.41, 290.92, -120.08]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Vines_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-74.45, 241.76, -224.94]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.SupportBeams_Window_0.geometry}
            material={materials.Window}
            position={[-77.06, 201.39, -235.66]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FenceRight_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-353.62, 93.43, 93.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FenceRight015_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-383.26, 94.92, -275.52]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FenceLeft_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-389.18, 98.81, -264.97]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.FenceRight003_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-349.68, 89.41, 101.41]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.SmallRocks_BigRock_0.geometry}
            material={materials.BigRock}
            position={[4.02, 131.41, -227.81]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Rocks_BigRock_0.geometry}
            material={materials.BigRock}
            position={[19.77, 143.79, -172.87]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BTree001_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-206.56, 534.74, -287.14]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BTree_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-248.65, 380.85, 155.39]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BTree002_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-289.38, 414.46, -310.24]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Redwood_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-78.68, 344.71, -68.31]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RedwoodAlpha_TreeLeafs_0.geometry}
            material={materials.TreeLeafs}
            position={[-90.09, 598.72, -98.59]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RedwoodChopped_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-189.72, 107.18, 84.88]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.RedwoodMoss_BrichTree_0.geometry}
            material={materials.BrichTree}
            position={[-326, 85, -64.99]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stump001_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-381.08, 93.12, -193.85]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stump002_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-563.26, 83.96, -253.34]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stump003_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-565.75, 84.05, -61.3]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Stump_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-575.72, 89.22, -23.81]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Ground_Ground_0.geometry}
            material={materials.Ground}
            position={[-235.19, 93.31, -97.73]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GrassOrange_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-124.51, 299.66, -165.87]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GrassRoof_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-100.39, 330.23, -133.4]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GrassGround_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-244.99, 103.42, -133.91]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.GrassRoof001_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-76.65, 524.21, -58.86]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane001_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-248.74, 102.91, -291.7]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane002_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-258.47, 103.09, -284.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane005_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-249.01, 83.65, 147.94]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane006_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-235.19, 81.35, 143]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane007_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-99.99, 337.48, -177.37]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane008_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-588, 76.93, -128.02]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane009_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-484.16, 62.48, -122]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane010_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-477.78, 66.67, -109.08]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Racoon_Animals_0.geometry}
            material={materials.Animals}
            position={[-288.98, 129.29, -295.17]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Bird_Animals_0.geometry}
            material={materials.Animals}
            position={[-288.44, 253.05, -280.86]}
            rotation={[-1.58, -0.02, 0.11]}
            scale={100}
          />
          <mesh
            geometry={nodes.Bird001_Animals_0.geometry}
            material={materials.Animals}
            position={[-528.89, 813.78, -51.38]}
            rotation={[-1.52, -0.02, -0.21]}
            scale={100}
          />
          <mesh
            geometry={nodes.Bird002_Animals_0.geometry}
            material={materials.Animals}
            position={[-349.93, 975.4, -386.84]}
            rotation={[-1.56, -0.02, 0.51]}
            scale={100}
          />
          <mesh
            geometry={nodes.GroundPlane_Plane_0.geometry}
            material={materials.Plane}
            position={[-220.83, 59.32, -82.07]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Powerlines_WoodFence_0.geometry}
            material={materials.WoodFence}
            position={[-442.47, 851.42, -74.76]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Powerlines001_GrassALPHA_0.geometry}
            material={materials.GrassALPHA}
            position={[-443.43, 870.03, -75.07]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/three/forest-house.glb');

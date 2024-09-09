import * as THREE from 'three';
import {useGLTF} from '@react-three/drei';
import {GLTF} from 'three-stdlib';
import GlitterCircle from '@/app/projectsShowcase/3dObjectControl/components/glitter-circle';
import {useBox, BoxProps} from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_39: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_43: THREE.Mesh;
    Object_45: THREE.Mesh;
    Object_47: THREE.Mesh;
    Object_49: THREE.Mesh;
    Object_51: THREE.Mesh;
    Object_53: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_57: THREE.Mesh;
    Object_59: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_62: THREE.Mesh;
    Object_63: THREE.Mesh;
    Object_65: THREE.Mesh;
    Object_66: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_69: THREE.Mesh;
    Object_71: THREE.Mesh;
    Object_72: THREE.Mesh;
    Object_74: THREE.Mesh;
    Object_75: THREE.Mesh;
    Object_77: THREE.Mesh;
    Object_78: THREE.Mesh;
    Object_80: THREE.Mesh;
    Object_81: THREE.Mesh;
    Object_83: THREE.Mesh;
    Object_84: THREE.Mesh;
    Object_86: THREE.Mesh;
    Object_87: THREE.Mesh;
    Object_89: THREE.Mesh;
    Object_90: THREE.Mesh;
    Object_92: THREE.Mesh;
    Object_93: THREE.Mesh;
    Object_95: THREE.Mesh;
    Object_96: THREE.Mesh;
    Object_98: THREE.Mesh;
    Object_99: THREE.Mesh;
    Object_101: THREE.Mesh;
    Object_102: THREE.Mesh;
    Object_104: THREE.Mesh;
    Object_105: THREE.Mesh;
    Object_107: THREE.Mesh;
    Object_108: THREE.Mesh;
    Object_110: THREE.Mesh;
    Object_111: THREE.Mesh;
    Object_113: THREE.Mesh;
    Object_114: THREE.Mesh;
    Object_116: THREE.Mesh;
    Object_117: THREE.Mesh;
    Object_119: THREE.Mesh;
    Object_120: THREE.Mesh;
    Object_122: THREE.Mesh;
    Object_123: THREE.Mesh;
    Object_125: THREE.Mesh;
    Object_126: THREE.Mesh;
    Object_128: THREE.Mesh;
    Object_129: THREE.Mesh;
    Object_131: THREE.Mesh;
    Object_132: THREE.Mesh;
    Object_134: THREE.Mesh;
    Object_135: THREE.Mesh;
    Object_137: THREE.Mesh;
    Object_138: THREE.Mesh;
    Object_140: THREE.Mesh;
    Object_141: THREE.Mesh;
    Object_143: THREE.Mesh;
    Object_144: THREE.Mesh;
    Object_146: THREE.Mesh;
    Object_147: THREE.Mesh;
    Object_149: THREE.Mesh;
    Object_150: THREE.Mesh;
    Object_152: THREE.Mesh;
    Object_153: THREE.Mesh;
    Object_155: THREE.Mesh;
    Object_156: THREE.Mesh;
    Object_158: THREE.Mesh;
    Object_159: THREE.Mesh;
    Object_161: THREE.Mesh;
    Object_162: THREE.Mesh;
    Object_164: THREE.Mesh;
    Object_165: THREE.Mesh;
    Object_167: THREE.Mesh;
    Object_168: THREE.Mesh;
    Object_170: THREE.Mesh;
    Object_171: THREE.Mesh;
    Object_173: THREE.Mesh;
    Object_174: THREE.Mesh;
    Object_176: THREE.Mesh;
    Object_178: THREE.Mesh;
    Object_179: THREE.Mesh;
    Object_181: THREE.Mesh;
    Object_183: THREE.Mesh;
    Object_185: THREE.Mesh;
    Object_186: THREE.Mesh;
    Object_188: THREE.Mesh;
    Object_190: THREE.Mesh;
    Object_191: THREE.Mesh;
    Object_193: THREE.Mesh;
    Object_194: THREE.Mesh;
    Object_196: THREE.Mesh;
    Object_198: THREE.Mesh;
    Object_199: THREE.Mesh;
    Object_201: THREE.Mesh;
    Object_202: THREE.Mesh;
    Object_204: THREE.Mesh;
    Object_206: THREE.Mesh;
    Object_207: THREE.Mesh;
    Object_209: THREE.Mesh;
    Object_210: THREE.Mesh;
    Object_212: THREE.Mesh;
    Object_213: THREE.Mesh;
    Object_215: THREE.Mesh;
    Object_216: THREE.Mesh;
    Object_218: THREE.Mesh;
    Object_219: THREE.Mesh;
    Object_221: THREE.Mesh;
    Object_222: THREE.Mesh;
    Object_224: THREE.Mesh;
    Object_225: THREE.Mesh;
    Object_227: THREE.Mesh;
    Object_228: THREE.Mesh;
    Object_230: THREE.Mesh;
    Object_232: THREE.Mesh;
    Object_234: THREE.Mesh;
    Object_235: THREE.Mesh;
    Object_237: THREE.Mesh;
    Object_238: THREE.Mesh;
    Object_240: THREE.Mesh;
    Object_241: THREE.Mesh;
    Object_243: THREE.Mesh;
    Object_245: THREE.Mesh;
    Object_246: THREE.Mesh;
    Object_248: THREE.Mesh;
    Object_249: THREE.Mesh;
    Object_251: THREE.Mesh;
    Object_253: THREE.Mesh;
    Object_254: THREE.Mesh;
    Object_256: THREE.Mesh;
    Object_257: THREE.Mesh;
    Object_259: THREE.Mesh;
    Object_260: THREE.Mesh;
    Object_262: THREE.Mesh;
    Object_264: THREE.Mesh;
    Object_265: THREE.Mesh;
    Object_267: THREE.Mesh;
    Object_268: THREE.Mesh;
    Object_270: THREE.Mesh;
    Object_272: THREE.Mesh;
    Object_274: THREE.Mesh;
    Object_275: THREE.Mesh;
    Object_277: THREE.Mesh;
    Object_278: THREE.Mesh;
    Object_280: THREE.Mesh;
    Object_282: THREE.Mesh;
    Object_283: THREE.Mesh;
    Object_285: THREE.Mesh;
    Object_286: THREE.Mesh;
    Object_288: THREE.Mesh;
    Object_289: THREE.Mesh;
    Object_291: THREE.Mesh;
    Object_292: THREE.Mesh;
    Object_294: THREE.Mesh;
    Object_295: THREE.Mesh;
    Object_297: THREE.Mesh;
    Object_299: THREE.Mesh;
    Object_300: THREE.Mesh;
    Object_302: THREE.Mesh;
    Object_303: THREE.Mesh;
    Object_305: THREE.Mesh;
    Object_306: THREE.Mesh;
    Object_308: THREE.Mesh;
    Object_309: THREE.Mesh;
    Object_311: THREE.Mesh;
    Object_312: THREE.Mesh;
    Object_314: THREE.Mesh;
    Object_315: THREE.Mesh;
    Object_317: THREE.Mesh;
    Object_318: THREE.Mesh;
    Object_320: THREE.Mesh;
    Object_321: THREE.Mesh;
    Object_323: THREE.Mesh;
    Object_324: THREE.Mesh;
    Object_326: THREE.Mesh;
    Object_327: THREE.Mesh;
    Object_329: THREE.Mesh;
    Object_330: THREE.Mesh;
    Object_332: THREE.Mesh;
    Object_333: THREE.Mesh;
    Object_335: THREE.Mesh;
    Object_336: THREE.Mesh;
    Object_338: THREE.Mesh;
    Object_340: THREE.Mesh;
    Object_341: THREE.Mesh;
    Object_343: THREE.Mesh;
    Object_345: THREE.Mesh;
    Object_347: THREE.Mesh;
    Object_348: THREE.Mesh;
    Object_350: THREE.Mesh;
    Object_352: THREE.Mesh;
    Object_353: THREE.Mesh;
    Object_355: THREE.Mesh;
    Object_356: THREE.Mesh;
    Object_358: THREE.Mesh;
    Object_359: THREE.Mesh;
    Object_361: THREE.Mesh;
    Object_362: THREE.Mesh;
    Object_364: THREE.Mesh;
    Object_366: THREE.Mesh;
    Object_368: THREE.Mesh;
    Object_369: THREE.Mesh;
    Object_371: THREE.Mesh;
    Object_372: THREE.Mesh;
    Object_374: THREE.Mesh;
    Object_376: THREE.Mesh;
    Object_378: THREE.Mesh;
    Object_380: THREE.Mesh;
    Object_382: THREE.Mesh;
    Object_384: THREE.Mesh;
    Object_386: THREE.Mesh;
    Object_388: THREE.Mesh;
    Object_390: THREE.Mesh;
    Object_392: THREE.Mesh;
    Object_394: THREE.Mesh;
    Object_396: THREE.Mesh;
    Object_398: THREE.Mesh;
    Object_400: THREE.Mesh;
    Object_402: THREE.Mesh;
    Object_404: THREE.Mesh;
    Object_406: THREE.Mesh;
    Object_407: THREE.Mesh;
    Object_409: THREE.Mesh;
    Object_411: THREE.Mesh;
    Object_413: THREE.Mesh;
    Object_415: THREE.Mesh;
    Object_417: THREE.Mesh;
    Object_418: THREE.Mesh;
    Object_420: THREE.Mesh;
    Object_421: THREE.Mesh;
    Object_423: THREE.Mesh;
    Object_425: THREE.Mesh;
    Object_426: THREE.Mesh;
    Object_428: THREE.Mesh;
    Object_430: THREE.Mesh;
    Object_432: THREE.Mesh;
    Object_434: THREE.Mesh;
    Object_436: THREE.Mesh;
    Object_437: THREE.Mesh;
    Object_439: THREE.Mesh;
    Object_440: THREE.Mesh;
    Object_442: THREE.Mesh;
    Object_443: THREE.Mesh;
    Object_445: THREE.Mesh;
    Object_446: THREE.Mesh;
    Object_448: THREE.Mesh;
    Object_449: THREE.Mesh;
    Object_451: THREE.Mesh;
    Object_452: THREE.Mesh;
    Object_454: THREE.Mesh;
    Object_455: THREE.Mesh;
    Object_457: THREE.Mesh;
    Object_458: THREE.Mesh;
    Object_460: THREE.Mesh;
    Object_461: THREE.Mesh;
    Object_463: THREE.Mesh;
    Object_464: THREE.Mesh;
    Object_466: THREE.Mesh;
    Object_467: THREE.Mesh;
    Object_469: THREE.Mesh;
    Object_470: THREE.Mesh;
    Object_472: THREE.Mesh;
    Object_474: THREE.Mesh;
    Object_476: THREE.Mesh;
    Object_477: THREE.Mesh;
    Object_479: THREE.Mesh;
    Object_480: THREE.Mesh;
    Object_482: THREE.Mesh;
    Object_483: THREE.Mesh;
    Object_485: THREE.Mesh;
    Object_486: THREE.Mesh;
    Object_488: THREE.Mesh;
    Object_489: THREE.Mesh;
    Object_491: THREE.Mesh;
    Object_492: THREE.Mesh;
    Object_494: THREE.Mesh;
    Object_495: THREE.Mesh;
    Object_497: THREE.Mesh;
    Object_498: THREE.Mesh;
    Object_500: THREE.Mesh;
    Object_501: THREE.Mesh;
    Object_503: THREE.Mesh;
    Object_504: THREE.Mesh;
    Object_506: THREE.Mesh;
    Object_507: THREE.Mesh;
    Object_509: THREE.Mesh;
    Object_510: THREE.Mesh;
    Object_512: THREE.Mesh;
    Object_513: THREE.Mesh;
    Object_515: THREE.Mesh;
    Object_516: THREE.Mesh;
    Object_518: THREE.Mesh;
    Object_519: THREE.Mesh;
    Object_521: THREE.Mesh;
    Object_522: THREE.Mesh;
    Object_524: THREE.Mesh;
    Object_525: THREE.Mesh;
    Object_527: THREE.Mesh;
    Object_528: THREE.Mesh;
    Object_530: THREE.Mesh;
    Object_531: THREE.Mesh;
    Object_533: THREE.Mesh;
    Object_534: THREE.Mesh;
    Object_536: THREE.Mesh;
    Object_537: THREE.Mesh;
    Object_539: THREE.Mesh;
    Object_540: THREE.Mesh;
    Object_542: THREE.Mesh;
    Object_543: THREE.Mesh;
    Object_545: THREE.Mesh;
    Object_546: THREE.Mesh;
    Object_548: THREE.Mesh;
    Object_549: THREE.Mesh;
    Object_551: THREE.Mesh;
    Object_552: THREE.Mesh;
    Object_554: THREE.Mesh;
    Object_555: THREE.Mesh;
    Object_557: THREE.Mesh;
    Object_558: THREE.Mesh;
    Object_560: THREE.Mesh;
    Object_562: THREE.Mesh;
    Object_564: THREE.Mesh;
    Object_566: THREE.Mesh;
    Object_567: THREE.Mesh;
    Object_569: THREE.Mesh;
    Object_571: THREE.Mesh;
    Object_572: THREE.Mesh;
    Object_574: THREE.Mesh;
    Object_575: THREE.Mesh;
    Object_577: THREE.Mesh;
    Object_578: THREE.Mesh;
    Object_580: THREE.Mesh;
    Object_582: THREE.Mesh;
    Object_584: THREE.Mesh;
  };
  materials: {
    outline_non_culled: THREE.MeshBasicMaterial;
    white: THREE.MeshBasicMaterial;
    outline_culled: THREE.MeshBasicMaterial;
    big_shapes: THREE.MeshBasicMaterial;
    floor_n_mattress: THREE.MeshBasicMaterial;
    notes: THREE.MeshBasicMaterial;
    details: THREE.MeshBasicMaterial;
    leaves: THREE.MeshBasicMaterial;
    Material: THREE.MeshBasicMaterial;
    catsu: THREE.MeshBasicMaterial;
  };
};

function RoomObject({args, ...props}: BoxProps) {
  const [ref] = useBox(() => ({type: 'Static', args, ...props}), undefined, [
    args,
    props,
  ]);

  return (
    <mesh ref={ref as React.MutableRefObject<THREE.Mesh>} visible={false}>
      <boxGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function Room(props: JSX.IntrinsicElements['group']) {
  const {nodes, materials} = useGLTF('/three/room.glb') as GLTFResult;

  return (
    <>
      <GlitterCircle position={[-17, 0.1, 2]} rotation={[-Math.PI / 2, 0, 0]} />
      <RoomObject args={[7, 7.5, 18]} position={[0, 3.8, 0]} />
      <group
        {...props}
        dispose={null}
        scale={4}
        rotation={[0, Math.PI, 0]}
        position={[0, -0.5, 0]}
      >
        <group position={[-0.15, 0.88, -1.46]} scale={[1, 0.9, 1]}>
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.big_shapes}
          />
          <mesh
            geometry={nodes.Object_21.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.87, 2.1, 0]}
          rotation={[0, 0, 1.53]}
          scale={[0.94, 1, 1]}
        >
          <mesh
            geometry={nodes.Object_27.geometry}
            material={materials.outline_culled}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.big_shapes}
          />
        </group>
        <group position={[0.35, 0.61, -2.63]} scale={[1, 0.9, 1]}>
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials.big_shapes}
          />
          <mesh
            geometry={nodes.Object_31.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.91, 1.64, 0.02]} scale={[1, 0.9, 1]}>
          <mesh
            geometry={nodes.Object_33.geometry}
            material={materials.big_shapes}
          />
          <mesh
            geometry={nodes.Object_34.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[0.77, 1.23, -1.43]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.17, 1, 0.89]}
        >
          <mesh
            geometry={nodes.Object_36.geometry}
            material={materials.big_shapes}
          />
          <mesh
            geometry={nodes.Object_37.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.84, 3.08, -1.42]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[1, 1, 0.79]}
        >
          <mesh
            geometry={nodes.Object_53.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_54.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.8, 2.67, -0.97]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[1, 1, 0.73]}
        >
          <mesh
            geometry={nodes.Object_56.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_57.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.78, 3.14, -0.94]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            geometry={nodes.Object_59.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_60.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.84, 2.5, -1.54]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.8}
        >
          <mesh
            geometry={nodes.Object_62.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_63.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.85, 2.47, -1.7]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            geometry={nodes.Object_65.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_66.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.85, 2.39, -1.41]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            geometry={nodes.Object_68.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_69.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.25, 2, -1.12]} rotation={[-Math.PI, 1.19, 0]}>
          <mesh
            geometry={nodes.Object_71.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_72.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.28, 1.99, -1.4]} rotation={[-Math.PI, 1.09, 0]}>
          <mesh
            geometry={nodes.Object_74.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_75.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.01, 1.98, -1.07]} rotation={[-Math.PI, 1.36, 0]}>
          <mesh
            geometry={nodes.Object_77.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_78.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.69, 2.79, 2.22]} rotation={[1.65, -0.05, -0.01]}>
          <mesh
            geometry={nodes.Object_80.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_81.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.68, 2.61, 2.22]} rotation={[1.63, 0.02, -0.02]}>
          <mesh
            geometry={nodes.Object_83.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_84.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.78, 3.43, -1.05]} rotation={[0.8, 0, Math.PI / 2]}>
          <mesh
            geometry={nodes.Object_86.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_87.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.78, 3.44, -1.79]} rotation={[-1.47, 0, 1.59]}>
          <mesh
            geometry={nodes.Object_89.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_90.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.77, 2.75, -1.81]} rotation={[-2.2, 0, 1.59]}>
          <mesh
            geometry={nodes.Object_92.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_93.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.77, 2.87, -1.15]}
          rotation={[2.53, 0, Math.PI / 2]}
        >
          <mesh
            geometry={nodes.Object_95.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_96.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.64, 2.57, 1.05]} rotation={[1.55, 0.07, -0.01]}>
          <mesh
            geometry={nodes.Object_98.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_99.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.63, 2.52, 1.05]} rotation={[1.61, 0.08, -0.01]}>
          <mesh
            geometry={nodes.Object_101.geometry}
            material={materials.notes}
          />
          <mesh
            geometry={nodes.Object_102.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.62, 2.74, 1.6]}>
          <mesh
            geometry={nodes.Object_104.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_105.geometry}
            material={materials.big_shapes}
          />
        </group>
        <group position={[0.36, 0.61, 1.41]}>
          <mesh
            geometry={nodes.Object_107.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_108.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.15, 0.8, 1.89]} rotation={[0.57, 1.34, -0.77]}>
          <mesh
            geometry={nodes.Object_110.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_111.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.19, 1.43, 1.67]}>
          <mesh
            geometry={nodes.Object_113.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_114.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.91, 1.63, 0.02]}>
          <mesh
            geometry={nodes.Object_116.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_117.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.48, 2.26, -0.3]}>
          <mesh
            geometry={nodes.Object_119.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_120.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.24, 2.33, 0.32]}>
          <mesh
            geometry={nodes.Object_122.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_123.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.22, 2.22, -0.32]}>
          <mesh
            geometry={nodes.Object_125.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_126.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.38, 2.22, -1.63]}>
          <mesh
            geometry={nodes.Object_128.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_129.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.25, 2.02, -1.82]}>
          <mesh
            geometry={nodes.Object_131.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_132.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.05, 2.01, -1.68]}>
          <mesh
            geometry={nodes.Object_134.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_135.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.25, 2.2, -1.82]}>
          <mesh
            geometry={nodes.Object_137.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_138.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.25, 2.22, -1.82]} rotation={[0.07, 0.03, -0.05]}>
          <mesh
            geometry={nodes.Object_140.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_141.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.74, 2.67, 0.32]} rotation={[1.57, 0, -1.57]}>
          <mesh
            geometry={nodes.Object_143.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_144.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.7, 2.99, 0.32]} rotation={[-0.04, -0.01, 0.01]}>
          <mesh
            geometry={nodes.Object_146.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_147.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.29, 2.42, -0.37]}
          rotation={[-0.03, -0.37, 0.17]}
          scale={0.93}
        >
          <mesh
            geometry={nodes.Object_149.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_150.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.48, 2.49, -0.3]} rotation={[0.12, -0.6, 0.11]}>
          <mesh
            geometry={nodes.Object_152.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_153.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.64, 3.47, 1.23]} rotation={[0, 1.39, 0]}>
          <mesh
            geometry={nodes.Object_155.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_156.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.71, 3.42, 1.69]}>
          <mesh
            geometry={nodes.Object_158.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_159.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.74, 3.53, 1.71]} rotation={[0.15, -0.21, 0.04]}>
          <mesh
            geometry={nodes.Object_161.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_162.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.75, 3.56, 1.68]} rotation={[-0.02, 0.04, 0.27]}>
          <mesh
            geometry={nodes.Object_164.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_165.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.58, 2.87, -0.05]}
          rotation={[-0.03, 0.4, -1.2]}
          scale={1.32}
        >
          <mesh
            geometry={nodes.Object_167.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_168.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.61, 2.87, -0.06]} rotation={[-0.08, 0.38, -1.27]}>
          <mesh
            geometry={nodes.Object_170.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_171.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.59, 2.81, -0.32]} rotation={[-0.07, 0.05, -1.3]}>
          <mesh
            geometry={nodes.Object_173.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_174.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.66, 3.5, 1.47]} scale={0.94}>
          <mesh
            geometry={nodes.Object_178.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_179.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.55, 2.82, 1.81]}>
          <mesh
            geometry={nodes.Object_185.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_186.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.6, 3.1, 1.2]}>
          <mesh
            geometry={nodes.Object_190.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_191.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.59, 2.83, 1.5]}>
          <mesh
            geometry={nodes.Object_193.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_194.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.62, 2.38, 1.95]}>
          <mesh
            geometry={nodes.Object_198.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_199.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.58, 2.14, 1.45]}>
          <mesh
            geometry={nodes.Object_201.geometry}
            material={materials.white}
          />
          <mesh
            geometry={nodes.Object_202.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.38, 2.43, -1.63]} rotation={[0.02, -0.62, 0.02]}>
          <mesh
            geometry={nodes.Object_206.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_207.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.14, 2.06, -1.69]}>
          <mesh
            geometry={nodes.Object_209.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_210.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.22, 2.04, -1.71]}>
          <mesh
            geometry={nodes.Object_212.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_213.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.25, 2.01, -1.17]} rotation={[0, -1.08, 0]}>
          <mesh
            geometry={nodes.Object_215.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_216.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.7, 3.39, -0.23]}
          rotation={[0.05, -0.1, -1.58]}
          scale={1.08}
        >
          <mesh
            geometry={nodes.Object_218.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_219.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.69, 3.36, 0.34]} rotation={[-1.68, 0, -0.7]}>
          <mesh
            geometry={nodes.Object_221.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_222.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.81, 3.52, 0.36]}>
          <mesh
            geometry={nodes.Object_224.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_225.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.81, 3.52, -0.21]}>
          <mesh
            geometry={nodes.Object_227.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_228.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.66, 3.71, 1.47]} rotation={[0.02, 0, 0.07]}>
          <mesh
            geometry={nodes.Object_234.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_235.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.64, 3.54, 1.23]} rotation={[0, -0.62, 0.01]}>
          <mesh
            geometry={nodes.Object_237.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_238.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.66, 3.46, 1.05]}>
          <mesh
            geometry={nodes.Object_240.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_241.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.61, 1.5, 2.04]}>
          <mesh
            geometry={nodes.Object_245.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_246.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.6, 1.68, 1.99]} rotation={[-0.19, 0, -0.18]}>
          <mesh
            geometry={nodes.Object_248.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_249.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.74, 0.84, -2.63]} rotation={[-1.4, 0.49, -1.59]}>
          <mesh
            geometry={nodes.Object_253.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_254.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.79, 0.22, 0.62]}>
          <mesh
            geometry={nodes.Object_256.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_257.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.79, 0.22, -0.58]}>
          <mesh
            geometry={nodes.Object_259.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_260.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.23, 2.37, 0.54]} rotation={[2.68, -1.54, 1.3]}>
          <mesh
            geometry={nodes.Object_264.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_265.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.26, 2.51, 0.18]}>
          <mesh
            geometry={nodes.Object_267.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_268.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.68, 2.84, 1.68]}>
          <mesh
            geometry={nodes.Object_274.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_275.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.68, 3.03, 1.68]}>
          <mesh
            geometry={nodes.Object_277.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_278.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.44, 2.05, -0.31]}>
          <mesh
            geometry={nodes.Object_282.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_283.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.38, 2.39, -1.63]}>
          <mesh
            geometry={nodes.Object_285.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_286.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.64, 3.51, 1.23]}>
          <mesh
            geometry={nodes.Object_288.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_289.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.55, 2.89, 1.81]}>
          <mesh
            geometry={nodes.Object_291.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_292.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.6, 2.87, -0.34]} rotation={[-0.35, 0.15, -0.9]}>
          <mesh
            geometry={nodes.Object_294.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_295.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.21, 1.37, 1.64]}>
          <mesh
            geometry={nodes.Object_299.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_300.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.24, 1.33, 1.63]}>
          <mesh
            geometry={nodes.Object_302.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_303.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.19, 1.28, 1.66]}>
          <mesh
            geometry={nodes.Object_305.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_306.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.61, 1.35, 2.04]}>
          <mesh
            geometry={nodes.Object_308.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_309.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[0.86, 1.9, 0.16]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            geometry={nodes.Object_311.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_312.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[0.86, 1.9, -0.11]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            geometry={nodes.Object_314.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_315.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[0.86, 1.9, -0.38]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            geometry={nodes.Object_317.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_318.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.68, 3.09, 1.68]} rotation={[0, -0.62, 0]}>
          <mesh
            geometry={nodes.Object_320.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_321.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.14, 0.73, 1.9]} rotation={[0, -0.02, -0.07]}>
          <mesh
            geometry={nodes.Object_323.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_324.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.14, 0.69, 1.9]} rotation={[-0.02, -0.01, -0.03]}>
          <mesh
            geometry={nodes.Object_326.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_327.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.69, 3.41, -0.24]} rotation={[-1.72, -0.06, -1.15]}>
          <mesh
            geometry={nodes.Object_329.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_330.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.05, 2.18, -1.68]} rotation={[-0.08, -0.62, -0.08]}>
          <mesh
            geometry={nodes.Object_332.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_333.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.47, 2.53, -0.31]} rotation={[0.21, -0.73, 0.32]}>
          <mesh
            geometry={nodes.Object_335.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_336.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.55, 3.41, 1.98]}>
          <mesh
            geometry={nodes.Object_340.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_341.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.6, 3.1, 1.2]}>
          <mesh
            geometry={nodes.Object_347.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_348.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.62, 2.38, 1.95]}>
          <mesh
            geometry={nodes.Object_352.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_353.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[0.86, 1.9, 0.16]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            geometry={nodes.Object_355.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_356.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[0.86, 1.9, -0.1]}
          rotation={[1.54, -0.01, -1.65]}
          scale={0.96}
        >
          <mesh
            geometry={nodes.Object_358.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_359.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[0.86, 1.9, -0.38]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={1.01}
        >
          <mesh
            geometry={nodes.Object_361.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_362.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.21, 2.04, 1.71]}
          rotation={[Math.PI, -1.31, Math.PI]}
          scale={0.42}
        >
          <mesh
            geometry={nodes.Object_368.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_369.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.61, 2.27, 1.46]} rotation={[-0.03, 0.71, 0.28]}>
          <mesh
            geometry={nodes.Object_371.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_372.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[0.86, 1.9, 0.41]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            geometry={nodes.Object_406.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_407.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.79, 0.22, 0.62]}>
          <mesh
            geometry={nodes.Object_417.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_418.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.79, 0.22, -0.58]}>
          <mesh
            geometry={nodes.Object_420.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_421.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.58, 2.2, 1.94]} scale={0.99}>
          <mesh
            geometry={nodes.Object_425.geometry}
            material={materials.details}
          />
          <mesh
            geometry={nodes.Object_426.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.26, 1.02, -2.71]} rotation={[0.07, -0.04, -1.09]}>
          <mesh
            geometry={nodes.Object_436.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_437.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.23, 0.95, -2.83]} rotation={[-0.39, -0.45, -0.83]}>
          <mesh
            geometry={nodes.Object_439.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_440.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.27, 1.36, -2.61]} rotation={[-2.99, -1.26, 2.49]}>
          <mesh
            geometry={nodes.Object_442.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_443.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.51, 1.37, -2.84]} rotation={[-3.09, -0.37, 2.36]}>
          <mesh
            geometry={nodes.Object_445.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_446.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.39, 0.82, -2.59]} rotation={[-0.01, -0.28, -1.81]}>
          <mesh
            geometry={nodes.Object_448.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_449.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.61, 1.53, -3.07]} rotation={[-1.16, -0.51, -2.11]}>
          <mesh
            geometry={nodes.Object_451.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_452.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.5, 1.02, -2.54]} rotation={[3.13, -0.03, 2.35]}>
          <mesh
            geometry={nodes.Object_454.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_455.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.36, 0.96, -2.77]} rotation={[-2.7, -0.84, 3.12]}>
          <mesh
            geometry={nodes.Object_457.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_458.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.47, 1.12, -2.46]} rotation={[-2.36, 0.15, 2.84]}>
          <mesh
            geometry={nodes.Object_460.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_461.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.37, 0.97, -2.32]} rotation={[2.92, 0.97, 2.11]}>
          <mesh
            geometry={nodes.Object_463.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_464.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.34, 1.1, -2.85]} rotation={[-0.17, -1.05, -0.94]}>
          <mesh
            geometry={nodes.Object_466.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_467.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[0.19, 1.13, -2.86]} rotation={[0.11, 0.49, -0.45]}>
          <mesh
            geometry={nodes.Object_469.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_470.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[-0.29, 2.32, -1.15]} rotation={[0.13, 0.12, 0.26]}>
          <mesh
            geometry={nodes.Object_476.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_477.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.09, 2.25, 1.81]}
          rotation={[2.5, 0.97, 0.98]}
          scale={[-0.25, 0.25, 0.25]}
        >
          <mesh
            geometry={nodes.Object_479.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_480.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[0.25, 1.77, 2.43]}
          rotation={[0.99, 0, 2.34]}
          scale={0.45}
        >
          <mesh
            geometry={nodes.Object_482.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_483.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[0.39, 1.99, 2.36]}
          rotation={[1.42, 0.07, 2.29]}
          scale={0.45}
        >
          <mesh
            geometry={nodes.Object_485.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_486.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[0.07, 2.12, 2.12]}
          rotation={[0.38, 0.3, 2.79]}
          scale={0.44}
        >
          <mesh
            geometry={nodes.Object_488.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_489.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[0.31, 1.68, 2.36]}
          rotation={[1.72, 0.32, 2.04]}
          scale={0.44}
        >
          <mesh
            geometry={nodes.Object_491.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_492.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[0.36, 1.56, 2.47]}
          rotation={[1.14, 0.13, -3]}
          scale={0.43}
        >
          <mesh
            geometry={nodes.Object_494.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_495.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[0.27, 0.17, 2.5]}
          rotation={[0.02, -0.13, 2.88]}
          scale={[0.29, 0.43, 0.44]}
        >
          <mesh
            geometry={nodes.Object_497.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_498.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[0.33, 0.27, 2.35]}
          rotation={[0.37, 0.5, -3]}
          scale={[0.4, 0.45, 0.45]}
        >
          <mesh
            geometry={nodes.Object_500.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_501.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[0.2, 0.51, 2.41]}
          rotation={[0.74, 0.22, 2.75]}
          scale={0.4}
        >
          <mesh
            geometry={nodes.Object_503.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_504.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.38, 2.73, 1.76]}
          rotation={[0.97, 0.53, 2.71]}
          scale={0.43}
        >
          <mesh
            geometry={nodes.Object_506.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_507.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[-0.48, 2.85, 1.7]}
          rotation={[2.45, 1.08, 0.77]}
          scale={0.26}
        >
          <mesh
            geometry={nodes.Object_509.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_510.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.3, 2.58, 1.69]}
          rotation={[2.03, 1.07, 1.49]}
          scale={[-0.29, 0.29, 0.29]}
        >
          <mesh
            geometry={nodes.Object_512.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_513.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.61, 2.89, 1.46]}
          rotation={[-1.7, 0.12, 2.28]}
          scale={0.29}
        >
          <mesh
            geometry={nodes.Object_515.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_516.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.59, 2.89, 1.48]}
          rotation={[-2.04, 0.29, 2.16]}
          scale={0.26}
        >
          <mesh
            geometry={nodes.Object_518.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_519.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.61, 2.93, 1.5]}
          rotation={[-0.91, -0.62, 1.84]}
          scale={0.29}
        >
          <mesh
            geometry={nodes.Object_521.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_522.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.6, 2.98, 1.49]}
          rotation={[-1.53, -0.43, 1.68]}
          scale={0.2}
        >
          <mesh
            geometry={nodes.Object_524.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_525.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.54, 2.89, 1.49]}
          rotation={[-1.32, 0.22, 1.43]}
          scale={0.26}
        >
          <mesh
            geometry={nodes.Object_527.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_528.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.53, 2.92, 1.56]}
          rotation={[-0.71, -0.55, 1.87]}
          scale={0.19}
        >
          <mesh
            geometry={nodes.Object_530.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_531.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group position={[0.3, 2.36, -1.84]} rotation={[-0.88, -0.48, -0.58]}>
          <mesh
            geometry={nodes.Object_533.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_534.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group
          position={[0.17, 0.78, 2.22]}
          rotation={[0.92, 0.84, 2]}
          scale={0.46}
        >
          <mesh
            geometry={nodes.Object_536.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_537.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.2, 0.87, 2.09]}
          rotation={[-0.61, -0.06, 2.58]}
          scale={0.29}
        >
          <mesh
            geometry={nodes.Object_539.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_540.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.01, 0.82, 1.86]}
          rotation={[-1.57, 0.54, -2.16]}
          scale={0.29}
        >
          <mesh
            geometry={nodes.Object_542.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_543.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.05, 0.8, 1.94]}
          rotation={[-0.57, 0.38, -2.98]}
          scale={0.29}
        >
          <mesh
            geometry={nodes.Object_545.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_546.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.06, 0.82, 1.92]}
          rotation={[-1.24, -0.47, 1.74]}
          scale={0.29}
        >
          <mesh
            geometry={nodes.Object_548.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_549.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[0, 0.82, 1.9]}
          rotation={[-2.34, 1.11, -0.51]}
          scale={0.26}
        >
          <mesh
            geometry={nodes.Object_551.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_552.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group
          position={[-0.13, 0.84, 2.04]}
          rotation={[-0.7, 0.2, 2.02]}
          scale={0.22}
        >
          <mesh
            geometry={nodes.Object_554.geometry}
            material={materials.leaves}
          />
          <mesh
            geometry={nodes.Object_555.geometry}
            material={materials.outline_non_culled}
          />
        </group>
        <group position={[0.7, 2.38, -0.4]} rotation={[0, -0.02, 0]}>
          <mesh
            geometry={nodes.Object_557.geometry}
            material={materials.Material}
          />
          <mesh
            geometry={nodes.Object_558.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[2.03, 0.5, 0.49]} rotation={[-0.11, 0, -0.04]}>
          <mesh
            geometry={nodes.Object_566.geometry}
            material={materials.catsu}
          />
          <mesh
            geometry={nodes.Object_567.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[2.22, 0.34, 1.02]} rotation={[0.87, 0.23, -0.16]}>
          <mesh
            geometry={nodes.Object_571.geometry}
            material={materials.catsu}
          />
          <mesh
            geometry={nodes.Object_572.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[2.23, 0.44, 0.97]} rotation={[0.05, -0.77, -1.2]}>
          <mesh
            geometry={nodes.Object_574.geometry}
            material={materials.catsu}
          />
          <mesh
            geometry={nodes.Object_575.geometry}
            material={materials.outline_culled}
          />
        </group>
        <group position={[2.13, 0.34, 1.1]} rotation={[1.31, -0.46, -0.13]}>
          <mesh
            geometry={nodes.Object_577.geometry}
            material={materials.catsu}
          />
          <mesh
            geometry={nodes.Object_578.geometry}
            material={materials.outline_culled}
          />
        </group>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.outline_non_culled}
        />
        <mesh geometry={nodes.Object_6.geometry} material={materials.white} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.white} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.white} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.white} />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.white}
          position={[7.28, 2.52, -5.46]}
          scale={0.64}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.outline_culled}
          position={[7.28, 2.52, -5.46]}
          scale={0.64}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.big_shapes}
          position={[0, 0.87, 0]}
          scale={[1, 0.92, 1]}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.big_shapes}
          position={[0, 1.98, 1.57]}
          scale={[1, 0.9, 1]}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.big_shapes}
          position={[0, 0.51, 1.57]}
          scale={[1, 0.9, 1]}
        />
        <mesh
          geometry={nodes.Object_39.geometry}
          material={materials.floor_n_mattress}
          position={[2.29, 0.15, 0.58]}
          scale={0.82}
        />
        <mesh
          geometry={nodes.Object_41.geometry}
          material={materials.outline_culled}
          position={[0, 1.98, 1.57]}
          scale={[1, 0.9, 1]}
        />
        <mesh
          geometry={nodes.Object_43.geometry}
          material={materials.outline_culled}
          position={[0, 0.51, 1.57]}
          scale={[1, 0.9, 1]}
        />
        <mesh
          geometry={nodes.Object_45.geometry}
          material={materials.outline_culled}
          position={[0, 0.87, 0]}
          scale={[1, 0.92, 1]}
        />
        <mesh
          geometry={nodes.Object_47.geometry}
          material={materials.outline_culled}
          position={[-0.15, 0.88, -1.46]}
          scale={[1, 0.9, 1]}
        />
        <mesh
          geometry={nodes.Object_49.geometry}
          material={materials.outline_culled}
          position={[2.29, 0.15, 0.58]}
          scale={0.82}
        />
        <mesh
          geometry={nodes.Object_51.geometry}
          material={materials.outline_non_culled}
          position={[2.29, 0.15, 0.58]}
          scale={0.82}
        />
        <mesh
          geometry={nodes.Object_176.geometry}
          material={materials.details}
          position={[0.33, 2.13, 1.43]}
          rotation={[0, 0.24, 0]}
        />
        <mesh
          geometry={nodes.Object_181.geometry}
          material={materials.details}
          position={[-0.62, 2.88, 2]}
        />
        <mesh
          geometry={nodes.Object_183.geometry}
          material={materials.details}
          position={[-0.61, 3.08, 2.04]}
        />
        <mesh
          geometry={nodes.Object_188.geometry}
          material={materials.details}
          position={[-0.62, 2.88, 1.21]}
        />
        <mesh
          geometry={nodes.Object_196.geometry}
          material={materials.details}
          position={[-0.58, 2.2, 1.94]}
          scale={0.99}
        />
        <mesh
          geometry={nodes.Object_204.geometry}
          material={materials.details}
          position={[-0.57, 2.18, 1.67]}
        />
        <mesh
          geometry={nodes.Object_230.geometry}
          material={materials.details}
          position={[-0.55, 2.26, 1.22]}
        />
        <mesh
          geometry={nodes.Object_232.geometry}
          material={materials.details}
          position={[-0.55, 2.52, 1.22]}
          rotation={[0.11, 0.21, -0.03]}
        />
        <mesh
          geometry={nodes.Object_243.geometry}
          material={materials.white}
          position={[-0.6, 2.39, 1.7]}
        />
        <mesh
          geometry={nodes.Object_251.geometry}
          material={materials.details}
          position={[-0.55, 3.41, 1.98]}
        />
        <mesh
          geometry={nodes.Object_262.geometry}
          material={materials.notes}
          position={[-0.76, 3.26, -0.93]}
          rotation={[-0.23, 0.48, -0.89]}
        />
        <mesh
          geometry={nodes.Object_270.geometry}
          material={materials.details}
          position={[0.43, 2.13, 1.83]}
          rotation={[1.46, -0.26, -0.22]}
        />
        <mesh
          geometry={nodes.Object_272.geometry}
          material={materials.details}
          position={[0.24, 2.14, 1.04]}
          rotation={[1.66, -0.23, -0.19]}
        />
        <mesh
          geometry={nodes.Object_280.geometry}
          material={materials.details}
          position={[-0.55, 2.25, 1.22]}
        />
        <mesh
          geometry={nodes.Object_297.geometry}
          material={materials.white}
          position={[-0.61, 2.4, 1.65]}
        />
        <mesh
          geometry={nodes.Object_338.geometry}
          material={materials.details}
          position={[0.37, 2.03, 1.41]}
          rotation={[0, 0.37, 0]}
        />
        <mesh
          geometry={nodes.Object_343.geometry}
          material={materials.details}
          position={[-0.62, 2.88, 2]}
        />
        <mesh
          geometry={nodes.Object_345.geometry}
          material={materials.details}
          position={[-0.61, 3.08, 2.04]}
        />
        <mesh
          geometry={nodes.Object_350.geometry}
          material={materials.details}
          position={[-0.62, 2.89, 1.21]}
        />
        <mesh
          geometry={nodes.Object_364.geometry}
          material={materials.outline_culled}
          position={[-0.58, 2.2, 1.94]}
        />
        <mesh
          geometry={nodes.Object_366.geometry}
          material={materials.details}
          position={[0.47, 2.04, 1.82]}
          rotation={[0, 0.37, 0]}
          scale={0.42}
        />
        <mesh
          geometry={nodes.Object_374.geometry}
          material={materials.outline_culled}
          position={[-0.62, 2.74, 1.6]}
        />
        <mesh
          geometry={nodes.Object_376.geometry}
          material={materials.outline_culled}
          position={[-0.55, 2.25, 1.22]}
        />
        <mesh
          geometry={nodes.Object_378.geometry}
          material={materials.outline_culled}
          position={[-0.55, 2.25, 1.22]}
        />
        <mesh
          geometry={nodes.Object_380.geometry}
          material={materials.outline_culled}
          position={[-0.55, 2.26, 1.22]}
        />
        <mesh
          geometry={nodes.Object_382.geometry}
          material={materials.outline_culled}
          position={[-0.55, 2.52, 1.22]}
          rotation={[0.11, 0.21, -0.03]}
        />
        <mesh
          geometry={nodes.Object_384.geometry}
          material={materials.outline_culled}
          position={[-0.62, 2.88, 1.21]}
          scale={1.03}
        />
        <mesh
          geometry={nodes.Object_386.geometry}
          material={materials.outline_culled}
          position={[-0.62, 2.89, 1.21]}
        />
        <mesh
          geometry={nodes.Object_388.geometry}
          material={materials.outline_culled}
          position={[-0.62, 2.89, 1.21]}
        />
        <mesh
          geometry={nodes.Object_390.geometry}
          material={materials.outline_culled}
          position={[-0.57, 2.18, 1.67]}
        />
        <mesh
          geometry={nodes.Object_392.geometry}
          material={materials.outline_culled}
          position={[0.37, 2.03, 1.41]}
          rotation={[0, 0.37, 0]}
        />
        <mesh
          geometry={nodes.Object_394.geometry}
          material={materials.outline_culled}
          position={[0.47, 2.04, 1.82]}
          rotation={[0, 0.37, 0]}
          scale={0.42}
        />
        <mesh
          geometry={nodes.Object_396.geometry}
          material={materials.outline_culled}
          position={[0.24, 2.14, 1.04]}
          rotation={[1.66, -0.23, -0.19]}
        />
        <mesh
          geometry={nodes.Object_398.geometry}
          material={materials.outline_culled}
          position={[-0.62, 2.88, 2]}
        />
        <mesh
          geometry={nodes.Object_400.geometry}
          material={materials.outline_culled}
          position={[-0.62, 2.88, 2]}
        />
        <mesh
          geometry={nodes.Object_402.geometry}
          material={materials.outline_culled}
          position={[-0.61, 3.08, 2.04]}
        />
        <mesh
          geometry={nodes.Object_404.geometry}
          material={materials.outline_culled}
          position={[-0.61, 3.08, 2.04]}
        />
        <mesh
          geometry={nodes.Object_409.geometry}
          material={materials.outline_culled}
          position={[-0.55, 3.41, 1.98]}
        />
        <mesh
          geometry={nodes.Object_411.geometry}
          material={materials.outline_culled}
          position={[-0.55, 3.41, 1.98]}
          scale={0.99}
        />
        <mesh
          geometry={nodes.Object_413.geometry}
          material={materials.outline_culled}
          position={[0.24, 2.14, 1.04]}
          rotation={[1.66, -0.23, -0.19]}
        />
        <mesh
          geometry={nodes.Object_415.geometry}
          material={materials.outline_culled}
          position={[0.33, 2.13, 1.43]}
          rotation={[0, 0.24, 0]}
        />
        <mesh
          geometry={nodes.Object_423.geometry}
          material={materials.outline_culled}
          position={[-0.58, 2.2, 1.94]}
        />
        <mesh
          geometry={nodes.Object_428.geometry}
          material={materials.outline_culled}
          position={[-0.58, 2.2, 1.94]}
          scale={0.99}
        />
        <mesh
          geometry={nodes.Object_430.geometry}
          material={materials.outline_culled}
          position={[-0.61, 2.4, 1.65]}
        />
        <mesh
          geometry={nodes.Object_432.geometry}
          material={materials.outline_culled}
          position={[-0.6, 2.39, 1.7]}
        />
        <mesh
          geometry={nodes.Object_434.geometry}
          material={materials.outline_culled}
          position={[-0.76, 3.26, -0.93]}
          rotation={[-0.23, 0.48, -0.89]}
        />
        <mesh
          geometry={nodes.Object_472.geometry}
          material={materials.outline_culled}
          position={[-0.63, 2.8, 1.47]}
          rotation={[-2.79, 0.43, 1.62]}
          scale={0.09}
        />
        <mesh
          geometry={nodes.Object_474.geometry}
          material={materials.outline_culled}
          position={[-0.04, 0.82, 1.91]}
          rotation={[3, 0.42, 2.01]}
          scale={0.08}
        />
        <mesh
          geometry={nodes.Object_560.geometry}
          material={materials.Material}
          position={[0.71, 2.03, -0.52]}
          rotation={[Math.PI, -1.37, Math.PI]}
        />
        <mesh
          geometry={nodes.Object_562.geometry}
          material={materials.outline_culled}
          position={[0.71, 2.03, -0.52]}
          rotation={[Math.PI, -1.37, Math.PI]}
        />
        <mesh
          geometry={nodes.Object_569.geometry}
          material={materials.catsu}
          position={[2.04, 0.16, 1.11]}
          rotation={[-2.38, -0.93, -2]}
        />
        <mesh
          geometry={nodes.Object_580.geometry}
          material={materials.catsu}
          position={[2.35, 0.32, 0.18]}
          rotation={[0.06, 0.03, 0.08]}
        />
        <mesh
          geometry={nodes.Object_582.geometry}
          material={materials.outline_culled}
          position={[2.04, 0.16, 1.1]}
          rotation={[-2.38, -0.93, -2]}
        />
        <mesh
          geometry={nodes.Object_584.geometry}
          material={materials.outline_culled}
          position={[2.36, 0.36, 0.09]}
          rotation={[0.06, 0.03, 0.08]}
          scale={1.06}
        />
      </group>
    </>
  );
}

useGLTF.preload('/three/room.glb');

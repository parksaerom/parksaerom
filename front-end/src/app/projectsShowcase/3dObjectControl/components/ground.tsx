import {selectInside, useSelector} from '@/lib/redux';
import {usePlane} from '@react-three/cannon';

export default function Ground(props: JSX.IntrinsicElements['mesh']) {
  const inside = useSelector(selectInside);
  const [ref] = usePlane(() => ({
    mass: 0,
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh ref={ref as React.MutableRefObject<THREE.Mesh>} {...props}>
      <planeGeometry args={[40, 40]} />
      <shadowMaterial color='#171717' transparent opacity={0.4} />
      <meshStandardMaterial color={inside ? '#fff3ab' : '#E1E6D1'} />
    </mesh>
  );
}

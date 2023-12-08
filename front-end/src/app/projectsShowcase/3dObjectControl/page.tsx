import {useSelector, selectInside} from '@/lib/redux';
import {Metadata} from 'next/types';
import ThreeCanvas from '@/app/projectsShowcase/3DObjectControl/components/three-canvas';

export const metadata: Metadata = {
  title: '3D Object Control',
};

export default function ThreeObjectControl() {
  return (
    <>
      <div className='container flex h-full gap-6 py-6'>
        <ThreeCanvas />
      </div>
    </>
  );
}

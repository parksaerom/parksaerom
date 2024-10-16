import {Skeleton} from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';

const ThreeCanvas = dynamic(
  () => import('@/app/projects/3dObjectControl/components/three-canvas'),
  {
    loading: () => <Skeleton className='h-[65vh] w-[100vw]' />,
  },
);

export default function ThreeObjectControlPage() {
  return (
    <>
      <div className='container flex h-full gap-6 py-6'>
        <ThreeCanvas />
      </div>
    </>
  );
}

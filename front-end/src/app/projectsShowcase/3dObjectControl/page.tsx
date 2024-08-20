import ThreeCanvas from '@/app/projectsShowcase/3DObjectControl/components/three-canvas';

export default function ThreeObjectControlPage() {
  return (
    <>
      <div className='container flex h-full gap-6 py-6'>
        <ThreeCanvas />
      </div>
    </>
  );
}

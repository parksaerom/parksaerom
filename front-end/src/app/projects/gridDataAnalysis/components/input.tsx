import dynamic from 'next/dynamic';
import {BiLoaderAlt} from 'react-icons/bi';

const ExcelDataGrid = dynamic(
  () => import('@/app/projects/gridDataAnalysis/components/data-grid'),
  {
    ssr: false,
    loading: () => <BiLoaderAlt className='mr-2 h-4 w-4 animate-spin' />,
  },
);

export default function Input() {
  return (
    <div className='z-0 flex min-h-[35rem] items-center justify-center'>
      <ExcelDataGrid />
    </div>
  );
}

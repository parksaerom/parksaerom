import {Badge} from '@/components/ui/badge';

export interface RealTimeDataGridProps {
  gridData?: Array<Array<string>>;
}

export default function RealTimeDataGrid({
  gridData = [
    ['123.23', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ],
}: RealTimeDataGridProps) {
  const ridarSecondList = [
    '-120',
    '-90',
    '-60',
    '-30',
    '0',
    '+30',
    '+60',
    '+90',
    '+120',
  ];
  const ridarNameList = [
    'Front Lidar',
    'Rear Lidar',
    'Left Lidar',
    'Right Lidar',
  ];

  return (
    <div className='grid grid-cols-11 gap-2'>
      {ridarSecondList.map((second, secondIndex) => (
        <Badge
          variant='secondary'
          className={`justify-center ${secondIndex === 0 ? 'col-start-3' : ''}`}
        >
          {second}
        </Badge>
      ))}
      {ridarNameList.map((ridarName, ridarIndex) => (
        <>
          <Badge variant='secondary' className='col-span-2 justify-center'>
            {ridarName}
          </Badge>
          {gridData[ridarIndex].map((data) => (
            <Badge variant='outline' className='justify-center'>
              {data}
            </Badge>
          ))}
        </>
      ))}
    </div>
  );
}

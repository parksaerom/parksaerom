import {Badge} from '@/components/ui/badge';
import React from 'react';

export interface RealTimeDataGridProps {
  gridData?: string[][];
}

export default function RealTimeDataGrid({
  gridData = [
    ['', '', '', '', '', '', '', '', ''],
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
    <div className='grid h-5/6 grid-cols-11 gap-2'>
      {ridarSecondList.map((second, secondIndex) => (
        <Badge
          className={`justify-center ${secondIndex === 0 ? 'col-start-3' : ''}`}
          key={secondIndex}
        >
          {second}
        </Badge>
      ))}
      {ridarNameList.map((ridarName, ridarIndex) => (
        <React.Fragment key={ridarIndex}>
          <Badge className='col-span-2 justify-center' key={ridarIndex}>
            {ridarName}
          </Badge>
          {gridData[ridarIndex].map((data, index) => (
            <Badge variant='outline' className='justify-center' key={index}>
              {data}
            </Badge>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

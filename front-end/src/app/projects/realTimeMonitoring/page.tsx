'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import RealTimeLineChart from '@/app/projects/realTimeMonitoring/components/real-time-line-chart';
import RealTimeDataGrid from '@/app/projects/realTimeMonitoring/components/real-time-data-grid';
import {RealTimeLineChartProps} from '@/app/projects/realTimeMonitoring/components/real-time-line-chart';
import {useEffect, useRef, useState} from 'react';
import React from 'react';
import {Button} from '@/components/ui/button';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import {DataPointType} from '@/types';
import {BiPause, BiPlay, BiSolidDownload, BiStop} from '@/icons/icons';
import {Step} from 'react-joyride';
import {JoyRide} from '@/components/joyride';

const velocityAngleDataTitleList = [
  '현재 속도:',
  'FF Steer 각도:',
  'RR Steer 각도:',
];

export default function RealTimeMonitoringPage() {
  const divRef = useRef<HTMLDivElement>(null);
  const [flData, setFlData] = useState<DataPointType[]>([]);
  const [rrData, setRrData] = useState<DataPointType[]>([]);
  const realTimeLineChartList: RealTimeLineChartProps[] = [
    {
      title: 'FL Traction Motor',
      chartData: flData,
    },
    {
      title: 'RR Traction Motor',
      chartData: rrData,
    },
  ];
  const defaultLidarDataSet = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
  ];
  const defaultVelocityAngleDataSet = [0, 0, 0];
  const [lidarDataSet, setLidarDataSet] =
    useState<string[][]>(defaultLidarDataSet);
  const [velocityAngleDataSet, setVelocityAngleDataSet] = useState<number[]>(
    defaultVelocityAngleDataSet,
  );

  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const steps: Array<Step> = [
    {
      target: '#play',
      content: '실시간 데이터 모니터링을 시작합니다.',
      disableBeacon: true,
      placement: 'bottom',
    },
    {
      target: '#pause',
      content: '실시간 데이터 모니터링을 일시 정지합니다.',
      disableBeacon: true,
      placement: 'bottom',
    },
    {
      target: '#stop',
      content: '실시간 데이터 모니터링을 정지합니다.',
      disableBeacon: true,
      placement: 'bottom',
    },
    {
      target: '#download',
      content: '현재 화면을 이미지로 다운로드합니다.',
      disableBeacon: true,
      placement: 'bottom',
    },
  ];

  function generateRandomDataPoint(x: number): DataPointType {
    return {
      x: x,
      y: Math.floor(Math.random() * (100 - 10) + 10),
    };
  }

  function generateLidarDataSet(): string[][] {
    const sets: string[][] = [];

    for (let setIndex = 0; setIndex < 4; setIndex++) {
      const set: string[] = [];

      for (let i = 0; i < 9; i++) {
        const randomNumber = +(Math.random() * (999 - 100) + 100).toFixed(2);
        set.push(`${randomNumber}`);
      }

      sets.push(set);
    }

    return sets;
  }

  function generateVelocityAngleDataSet(): number[] {
    const smallNumbers: number[] = [];

    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * 90) + 1;
      smallNumbers.push(randomNumber);
    }

    return smallNumbers;
  }

  function startDataGeneration() {
    setIsRunning(true);
    setIsPaused(false);
    intervalRef.current = setInterval(() => {
      setFlData((prevData) => {
        let newData = [
          ...prevData,
          generateRandomDataPoint(prevData.length + 1),
        ];
        if (newData.length > 50) {
          newData = newData
            .slice(1)
            .map((point) => ({...point, x: point.x - 1}));
        }
        return newData;
      });

      setRrData((prevData) => {
        let newData = [
          ...prevData,
          generateRandomDataPoint(prevData.length + 1),
        ];
        if (newData.length > 50) {
          newData = newData
            .slice(1)
            .map((point) => ({...point, x: point.x - 1}));
        }
        return newData;
      });

      setLidarDataSet((prevSets) => {
        const newSets = generateLidarDataSet();
        return [...prevSets.slice(1), newSets[0]];
      });

      setVelocityAngleDataSet(generateVelocityAngleDataSet());
    }, 1000);
  }

  function pauseDataGeneration() {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function stopDataGeneration() {
    setIsRunning(false);
    setIsPaused(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setFlData([]);
    setRrData([]);
    setLidarDataSet(defaultLidarDataSet);
    setVelocityAngleDataSet(defaultVelocityAngleDataSet);
  }

  async function onDownload() {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, {
        scale: 2,
        backgroundColor: 'white',
      });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'monitoring.png');
        }
      });
    } catch (error) {
      alert('다운로드를 실패했습니다.');
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      className='container my-7 flex h-full flex-1 flex-wrap pb-10'
    >
      <JoyRide steps={steps} />
      <section className='grid w-full grid-cols-2 gap-4'>
        {realTimeLineChartList.map((lineChart) => (
          <Card key={lineChart.title}>
            <CardHeader className='py-5'>
              <CardTitle className='text-center text-base'>
                {lineChart.title}
              </CardTitle>
            </CardHeader>
            <CardContent className='pb-0 pl-2'>
              <RealTimeLineChart
                title={lineChart.title}
                chartData={lineChart.chartData}
              />
            </CardContent>
          </Card>
        ))}
        <RealTimeDataGrid gridData={lidarDataSet} />
        <div className='flex flex-col space-y-2'>
          <Card className='flex items-center space-x-2 p-4 text-xs'>
            {velocityAngleDataTitleList.map((title, index) => (
              <React.Fragment key={index}>
                <Label className='w-20 text-xs'>{title}</Label>
                <div className='h-8 w-28 rounded-md border border-input px-3 py-2'>
                  {velocityAngleDataSet[index]}
                </div>
              </React.Fragment>
            ))}
          </Card>
          <Card className='flex flex-wrap items-center justify-center space-x-6 bg-transparent p-3'>
            <Button
              id='play'
              title='재생'
              variant='ghost'
              onClick={startDataGeneration}
              disabled={isRunning && !isPaused}
            >
              <BiPlay className='h-12 w-12 text-green-600' />
            </Button>
            <Button
              id='pause'
              title='일시 정지'
              variant='ghost'
              onClick={pauseDataGeneration}
              disabled={!isRunning || isPaused}
            >
              <BiPause className='h-12 w-12 text-yellow-400' />
            </Button>
            <Button
              id='stop'
              title='정지'
              variant='ghost'
              onClick={stopDataGeneration}
              disabled={!isRunning && !isPaused}
            >
              <BiStop className='h-12 w-12 text-red-500' />
            </Button>
            <Button
              id='download'
              title='다운로드'
              variant='ghost'
              onClick={onDownload}
            >
              <BiSolidDownload className='h-10 w-10 text-blue-500' />
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}

'use client';

import {useState} from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Slider} from '@/components/ui/slider';
import {BiLoaderAlt} from 'react-icons/bi';
import {PiColumns, PiRows} from 'react-icons/pi';
import DataSelector from '@/app/projectsShowcase/gridDataAnalysis/components/data-selector';
import dynamic from 'next/dynamic';

const ExcelDataGrid = dynamic(
  () =>
    import(
      '@/app/projectsShowcase/gridDataAnalysis/components/excel-data-grid'
    ),
  {
    loading: () => <BiLoaderAlt className='mr-2 h-4 w-4 animate-spin' />,
    ssr: false,
  },
);

export default function RealTimeMonitoringPage() {
  const [confidenceLevel, setConfidenceLevel] = useState([0.95]);
  return (
    <>
      <div className='container flex h-full gap-6 py-6'>
        <div className='flex w-[40%] flex-col space-y-2'>
          <p className='text-sm font-bold opacity-80'>Input</p>
          <div className='z-0 flex min-h-[35rem] items-center justify-center'>
            <ExcelDataGrid />
          </div>
        </div>
        <div className='flex w-[40%] flex-col space-y-2'>
          <p className='text-sm font-bold opacity-80'>Output</p>
          <div className='min-h-[34.6rem] border bg-muted'></div>
        </div>
        <div className='flex w-[15%] flex-1 flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <span className='text-sm font-bold opacity-80'>데이터 입력</span>
            <Tabs defaultValue='columns' className='text-center'>
              <TabsList>
                <TabsTrigger value='columns'>
                  <p className='hidden px-1 lg:inline'>열 데이터</p>
                  <PiColumns className='h-5 w-5' />
                </TabsTrigger>
                <TabsTrigger value='row'>
                  <p className='hidden px-1 lg:inline'>행 데이터</p>
                  <PiRows className='h-4 w-4' />
                </TabsTrigger>
              </TabsList>
              <TabsContent value='columns'>
                <DataSelector />
              </TabsContent>
              <TabsContent value='row'>
                <DataSelector />
              </TabsContent>
            </Tabs>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
              <Label htmlFor='confidence'>신뢰 수준</Label>
              <span className='w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border'>
                {confidenceLevel}
              </span>
            </div>
            <Slider
              id='confidence'
              max={1}
              defaultValue={confidenceLevel}
              step={0.01}
              onValueChange={setConfidenceLevel}
              className='[&_[role=slider]]:h-4 [&_[role=slider]]:w-4'
            />
          </div>
          <Button className='justify-center'>분석</Button>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: 'Grid Data Analysis',
};

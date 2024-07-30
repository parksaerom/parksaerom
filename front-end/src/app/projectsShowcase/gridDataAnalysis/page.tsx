'use client';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Button} from '@/components/ui/button';
import {PiColumns, PiRows} from 'react-icons/pi';
import DataSelector from '@/app/projectsShowcase/gridDataAnalysis/components/data-selector';
import ConfidenceLevelSlider from '@/app/projectsShowcase/gridDataAnalysis/components/confidence-level-slider';
import {Metadata} from 'next/types';
import Input from '@/app/projectsShowcase/gridDataAnalysis/components/input';
import {HotTableProvider} from './components/data-grid-context';
import {useDispatch, setGridDataType, GridDataType} from '@/lib/redux';

export default function GridDataAnalysisPage() {
  const dispatch = useDispatch();
  function ChangedGridDataType() {
    dispatch(setGridDataType('COLUMN'));
  }

  return (
    <>
      <HotTableProvider>
        <div className='container flex h-full gap-6 py-6'>
          <div className='flex w-[40%] flex-col space-y-2'>
            <p className='text-sm font-bold opacity-80'>Input</p>
            <Input />
          </div>
          <div className='flex w-[40%] flex-col space-y-2'>
            <p className='text-sm font-bold opacity-80'>Output</p>
            <div className='min-h-[34.6rem] border bg-muted'></div>
          </div>
          <div className='flex w-[15%] flex-1 flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm font-bold opacity-80'>데이터 입력</span>
              <Tabs defaultValue='COLUMN' className='text-center'>
                <TabsList>
                  <TabsTrigger value='COLUMN'>
                    <p className='hidden px-1 lg:inline'>열 데이터</p>
                    <PiColumns className='h-5 w-5' />
                  </TabsTrigger>
                  <TabsTrigger value='ROW'>
                    <p className='hidden px-1 lg:inline'>행 데이터</p>
                    <PiRows className='h-4 w-4' />
                  </TabsTrigger>
                </TabsList>
                <TabsContent value='COLUMN'>
                  <DataSelector gridDataType={'COLUMN'} />
                </TabsContent>
                <TabsContent value='ROW'>
                  <DataSelector gridDataType={'ROW'} />
                </TabsContent>
              </Tabs>
            </div>
            <div className='flex flex-col gap-3'>
              <ConfidenceLevelSlider />
            </div>
            <Button className='justify-center'>분석</Button>
          </div>
        </div>
      </HotTableProvider>
    </>
  );
}

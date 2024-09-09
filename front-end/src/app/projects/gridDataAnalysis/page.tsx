'use client';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Button} from '@/components/ui/button';
import {PiColumns, PiRows} from 'react-icons/pi';
import DataSelector from '@/app/projects/gridDataAnalysis/components/data-selector';
import ConfidenceLevelSlider from '@/app/projects/gridDataAnalysis/components/confidence-level-slider';
import Input from '@/app/projects/gridDataAnalysis/components/input';
import {HotTableProvider, useHotTable} from './components/data-grid-context';
import {
  useSelector,
  selectSelectedColumnRowInfo,
  GridDataType,
  selectSelectedConfidenceLevel,
  useDispatch,
  resetGridDataAnalysis,
} from '@/lib/redux';
import {useEffect, useState} from 'react';
import {useToast} from '@/hooks/use-toast';

interface StatisticsResult {
  sampleSize: number;
  mean: number;
  sampleStandardDeviation: number;
  standardErrorOfMean: number;
  min: number;
  max: number;
  median: number;
  populationVariance: number;
  sumOfSquares: number;
  deviationSum: number;
  marginOfError: number;
  lowerBound: number;
  upperBound: number;
}

interface StatisticsColumnResult extends StatisticsResult {
  columnName: string;
  columnType: GridDataType;
}

function GridDataAnalysisContent() {
  const [selectedGridDataType, setSelectedGridDataType] =
    useState<GridDataType>('COLUMN');
  const [statisticsColumnResults, setStatisticsColumnResults] = useState<
    StatisticsColumnResult[]
  >([]);
  const {hotTableComponent} = useHotTable();
  const selectedColumnRowInfo = useSelector(selectSelectedColumnRowInfo);
  const confidenceLevel = useSelector(selectSelectedConfidenceLevel);
  const {toast} = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetGridDataAnalysis());
    };
  }, [dispatch]);

  function calculateStatistics(data: number[]) {
    try {
      // 표본 개수
      const n = data.length;

      // 평균 계산
      const mean = data.reduce((sum, value) => sum + value, 0) / n;

      // 편차 제곱합 계산
      const deviationSum = data.reduce(
        (sum, value) => sum + (value - mean) ** 2,
        0,
      );

      // 표본 표준편차 계산
      const sampleStandardDeviation = Math.sqrt(deviationSum / (n - 1));

      // 평균의 표준 오차 계산
      const standardErrorOfMean = sampleStandardDeviation / Math.sqrt(n);

      // 최소값, 최대값 계산
      const min = Math.min(...data);
      const max = Math.max(...data);

      // 중앙값 계산
      const sortedData = [...data].sort((a, b) => a - b);
      const median =
        n % 2 === 0
          ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2
          : sortedData[Math.floor(n / 2)];

      // 모분산 계산
      const populationVariance = deviationSum / n;

      // 제곱합 계산
      const sumOfSquares = data.reduce((sum, value) => sum + value ** 2, 0);

      //신뢰구간 계산
      let zScore: number;

      if (confidenceLevel <= 0.95) {
        zScore = 1.96; // 95% 신뢰수준의 Z-값
      } else if (confidenceLevel <= 0.99) {
        zScore = 2.576; // 99% 신뢰수준의 Z-값
      } else {
        throw new Error('지원하지 않는 신뢰수준입니다.');
      }

      const marginOfError = zScore * standardErrorOfMean;
      const lowerBound = mean - marginOfError;
      const upperBound = mean + marginOfError;

      const result: StatisticsResult = {
        sampleSize: n,
        mean,
        sampleStandardDeviation,
        standardErrorOfMean,
        min,
        max,
        median,
        populationVariance,
        sumOfSquares,
        deviationSum,
        marginOfError,
        lowerBound,
        upperBound,
      };

      return result;
    } catch (error) {
      toast({
        description: '분석을 실패하였습니다.',
      });
      alert('');
      return;
    }
  }

  function onAnalysisData() {
    const selectedColumnRowIndex = selectedColumnRowInfo?.index;

    if (!selectedColumnRowIndex) {
      toast({
        description: '데이터를 선택해 주세요.',
      });
    } else {
      if (hotTableComponent.current && selectedColumnRowIndex) {
        const hotInstance = hotTableComponent.current.hotInstance;

        if (hotInstance) {
          const colRowData =
            selectedGridDataType === 'COLUMN'
              ? hotInstance.getDataAtCol(selectedColumnRowIndex)
              : hotInstance.getDataAtRow(selectedColumnRowIndex);
          const data = colRowData.filter(
            (value) => !isNaN(Number(value)) && value,
          );
          const result = calculateStatistics(data);

          if (result) {
            setStatisticsColumnResults((prevResults) => [
              ...prevResults,
              {
                columnName: selectedColumnRowInfo.name,
                columnType: selectedGridDataType,
                ...result,
              },
            ]);
          }
        }
      }
    }
  }

  return (
    <div className='container flex h-full gap-6 py-6'>
      <div className='flex w-[40%] flex-col space-y-2'>
        <p className='text-sm font-bold opacity-80'>Input</p>
        <Input />
      </div>
      <div className='flex w-[40%] flex-col space-y-2'>
        <p className='text-sm font-bold opacity-80'>Output</p>
        <div className='h-[34.6rem] overflow-y-auto border bg-muted'>
          {statisticsColumnResults.map((result, index) => (
            <div key={index} className='mb-4 p-4 text-sm'>
              <h2 className='m-1 text-lg font-bold'>
                {result.columnName}
                {result.columnType === 'COLUMN' ? '열' : '행'} 분석 결과
              </h2>
              <p>표본 개수(Total Count) = {result.sampleSize}</p>
              <p>평균(Mean) = {result.mean.toFixed(2)}</p>
              <p>
                표본 표준편차(Standard Deviation )={' '}
                {result.sampleStandardDeviation.toFixed(2)}
              </p>
              <p>
                평균의 표준 오차(Standard Error) ={' '}
                {result.standardErrorOfMean.toFixed(2)}
              </p>
              <p>최소값(Minimum Value) = {result.min}</p>
              <p>최대값(Maximum Value) = {result.max}</p>
              <p>중앙값(Median) = {result.median}</p>
              <p>모분산(Variance) = {result.populationVariance.toFixed(2)}</p>
              <p>제곱합(Sum Of Squares) = {result.sumOfSquares.toFixed(2)}</p>
              <p>
                편차 제곱합(Deviation Sum) = {result.deviationSum.toFixed(2)}
              </p>
              <p>
                신뢰구간[Lower Bound, Upper Bound] = [
                {result.lowerBound.toFixed(2)}, {result.upperBound.toFixed(2)}]
              </p>
              <p>
                오차 한계(Margin of Error) = {result.marginOfError.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex w-[15%] flex-1 flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <span className='text-sm font-bold opacity-80'>데이터 입력</span>
          <Tabs
            defaultValue={selectedGridDataType}
            className='text-center'
            onValueChange={(value) =>
              setSelectedGridDataType(value as GridDataType)
            }
          >
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
              <DataSelector gridDataType={selectedGridDataType} />
            </TabsContent>
            <TabsContent value='ROW'>
              <DataSelector gridDataType={selectedGridDataType} />
            </TabsContent>
          </Tabs>
        </div>
        <div className='flex flex-col gap-3'>
          <ConfidenceLevelSlider />
        </div>
        <Button className='justify-center' onClick={onAnalysisData}>
          분석
        </Button>
      </div>
    </div>
  );
}

export default function GridDataAnalysisPage() {
  return (
    <HotTableProvider>
      <GridDataAnalysisContent />
    </HotTableProvider>
  );
}

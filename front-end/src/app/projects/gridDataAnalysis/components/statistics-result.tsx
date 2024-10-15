import React from 'react';
import {StatisticsColumnResult} from '@/app/projects/gridDataAnalysis/page';

interface StatisticsResultProps {
  result: StatisticsColumnResult;
}

function StatisticsResult({result}: StatisticsResultProps) {
  return (
    <div className='mb-4 p-4 text-sm'>
      <h2 className='m-1 text-lg font-bold'>
        {result.columnName}
        {result.columnType === 'COLUMN' ? '열' : '행'} 분석 결과
      </h2>
      <p>표본 개수(Total Count) = {result.sampleSize}</p>
      <p>평균(Mean) = {result.mean.toFixed(2)}</p>
      <p>
        표본 표준편차(Standard Deviation ) ={' '}
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
      <p>편차 제곱합(Deviation Sum) = {result.deviationSum.toFixed(2)}</p>
      <p>
        신뢰구간[Lower Bound, Upper Bound] = [{result.lowerBound.toFixed(2)},{' '}
        {result.upperBound.toFixed(2)}]
      </p>
      <p>오차 한계(Margin of Error) = {result.marginOfError.toFixed(2)}</p>
    </div>
  );
}

export default StatisticsResult;

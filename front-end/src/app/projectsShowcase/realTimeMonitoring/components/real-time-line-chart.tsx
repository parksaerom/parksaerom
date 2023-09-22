'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export interface RealTimeLineChartProps {
  title: string;
  chartData1: Array<{x: number; y: number}>;
  chartData2: Array<{x: number; y: number}>;
}

export default function RealTimeLineChart({
  title = 'Real-Time Line Chart',
  chartData1,
  chartData2,
}: RealTimeLineChartProps) {
  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'linear' as const,
        min: 0,
        title: {
          display: true,
          text: 'sec',
        },
        ticks: {
          autoSkip: true,
        },
      },
      y: {
        min: 0,
        max: 600,
        beginAtZero: true,
        title: {
          display: true,
          text: 'rpm',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: chartData1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: chartData2,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className='container flex'>
      <Line options={options} data={data} />
    </div>
  );
}

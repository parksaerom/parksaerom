'use client';

import {DataPointType} from '@/types';
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
  chartData: DataPointType[];
}

export default function RealTimeLineChart({
  title = 'Real-Time Line Chart',
  chartData,
}: RealTimeLineChartProps) {
  const options = {
    interaction: {
      intersect: false,
    },
    responsive: true,
    scales: {
      x: {
        type: 'linear' as const,
        min: 1,
        max: 50,
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
        max: 120,
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
        label: 'Dataset',
        data: chartData,
        borderColor: 'rgb(2, 90, 128)',
        borderWidth: 1,
        radius: 0,
        backgroundColor: 'rgba(2, 90, 128)',
      },
    ],
  };

  return (
    <div className='container flex'>
      <Line options={options} data={data} />
    </div>
  );
}

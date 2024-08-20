import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import RealTimeLineChart from '@/app/projectsShowcase/realTimeMonitoring/components/real-time-line-chart';
import RealTimeDataGrid from '@/app/projectsShowcase/realTimeMonitoring/components/real-time-data-grid';
import {BiPlay, BiStop, BiPause, BiSolidDownload} from 'react-icons/bi';
import {RealTimeLineChartProps} from '@/app/projectsShowcase/realTimeMonitoring/components/real-time-line-chart';

export default function RealTimeMonitoringPage() {
  const realTimeLineChartList: RealTimeLineChartProps[] = [
    {
      title: 'FL Traction Motor',
      chartData1: [
        {x: 1, y: 123},
        {x: 2, y: 223},
        {x: 3, y: 124},
        {x: 4, y: 213},
        {x: 5, y: 34},
        {x: 6, y: 543},
      ],
      chartData2: [
        {x: 1, y: 323},
        {x: 2, y: 245},
        {x: 3, y: 344},
        {x: 4, y: 343},
        {x: 5, y: 234},
        {x: 6, y: 143},
      ],
    },
    {
      title: 'RR Traction Motor',
      chartData1: [
        {x: 1, y: 123},
        {x: 2, y: 223},
        {x: 3, y: 124},
        {x: 4, y: 213},
        {x: 5, y: 34},
        {x: 6, y: 543},
      ],
      chartData2: [
        {x: 1, y: 323},
        {x: 2, y: 245},
        {x: 3, y: 344},
        {x: 4, y: 343},
        {x: 5, y: 234},
        {x: 6, y: 143},
      ],
    },
  ];
  return (
    <div className='container my-7 flex h-full flex-1 flex-wrap'>
      <section className='grid w-full grid-cols-2 gap-4'>
        {realTimeLineChartList.map((lineChart) => (
          <Card>
            <CardHeader className='py-2'>
              <CardTitle className='text-center text-base'>
                {lineChart.title}
              </CardTitle>
            </CardHeader>
            <CardContent className='pl-2'>
              <RealTimeLineChart
                title={lineChart.title}
                chartData1={lineChart.chartData1}
                chartData2={lineChart.chartData2}
              />
            </CardContent>
          </Card>
        ))}
        <RealTimeDataGrid />
        <div className='flex flex-col space-y-2'>
          <Card className='flex items-center space-x-2 p-4'>
            <Label className='w-14 text-xs'>현재 속도:</Label>
            <Input className='h-8 w-28' type='text' />
            <Label className='w-20 text-xs'>FF Steer 각도:</Label>
            <Input className='h-8 w-28' type='text' />
            <Label className='w-20  text-xs'>RR Steer 각도:</Label>
            <Input className='h-8 w-28' type='text' />
          </Card>
          <Card className='flex flex-wrap items-center justify-center space-x-6 p-3'>
            <BiPlay className='h-12 w-12 text-green-600' />
            <BiPause className='h-12 w-12 text-yellow-400' />
            <BiStop className='h-12 w-12 text-red-500' />
            <BiSolidDownload className='h-10 w-10 text-blue-500' />
          </Card>
        </div>
      </section>
    </div>
  );
}

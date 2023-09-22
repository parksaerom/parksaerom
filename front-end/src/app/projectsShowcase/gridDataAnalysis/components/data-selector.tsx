import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface DataSelectorProps {
  title: string;
  chartData1: Array<{x: number; y: number}>;
  chartData2: Array<{x: number; y: number}>;
}

export default function DataSelector() {
  return (
    <Select>
      <SelectTrigger className='w-full'>
        <SelectValue placeholder='데이터를 선택하세요' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='blueberry'>Blueberry</SelectItem>
        <SelectItem value='grapes'>Grapes</SelectItem>
        <SelectItem value='pineapple'>Pineapple</SelectItem>
      </SelectContent>
    </Select>
  );
}

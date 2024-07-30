import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {useHotTable} from './data-grid-context';
import {useEffect, useState} from 'react';
import {
  GridDataType,
  updateSelectedColumnRowIndex,
  useDispatch,
} from '@/lib/redux';
interface RowColHeader {
  index: number;
  name: string;
}
interface DataSelectorProps {
  gridDataType: GridDataType;
}

export default function DataSelector({gridDataType}: DataSelectorProps) {
  const {hotTableComponent, updateTrigger} = useHotTable();
  const [nonEmptyColumnsRows, setNonEmptyColumnsRows] = useState<
    RowColHeader[]
  >([]);
  const dispatch = useDispatch();

  function UpdateNonEmptyColumnsRow() {
    if (hotTableComponent.current) {
      const hotInstance = hotTableComponent.current.hotInstance;
      if (hotInstance) {
        const nonEmptyColsRow: RowColHeader[] = [];
        const headers =
          gridDataType === 'COLUMN'
            ? hotInstance.getColHeader()
            : hotInstance.getRowHeader();
        const headersCount =
          gridDataType === 'COLUMN'
            ? hotInstance.countCols()
            : hotInstance.countRows();
        for (let count = 0; count < headersCount; count++) {
          const colRowData =
            gridDataType === 'COLUMN'
              ? hotInstance.getDataAtCol(count)
              : hotInstance.getDataAtRow(count);
          if (colRowData.some((cell) => cell !== null && cell !== '')) {
            nonEmptyColsRow.push({
              index: count,
              name: headers[count].toString(),
            });
          }
        }
        setNonEmptyColumnsRows(nonEmptyColsRow);
      }
    }
  }

  function OnChangeValue(value: string) {
    dispatch(updateSelectedColumnRowIndex(Number(value)));
  }

  useEffect(() => {
    UpdateNonEmptyColumnsRow();
  }, [updateTrigger, hotTableComponent.current]);

  return (
    <Select
      onValueChange={(value) => {
        if (value) OnChangeValue(value);
      }}
    >
      <SelectTrigger className='w-full'>
        <SelectValue placeholder='데이터를 선택하세요' />
      </SelectTrigger>
      <SelectContent>
        {nonEmptyColumnsRows.length > 0 ? (
          nonEmptyColumnsRows.map((columnRowInfo) => (
            <SelectItem
              value={columnRowInfo.index.toString()}
              key={columnRowInfo.index}
            >
              {columnRowInfo.name}
            </SelectItem>
          ))
        ) : (
          <SelectItem disabled value='none'>
            데이터가 없습니다.
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  );
}

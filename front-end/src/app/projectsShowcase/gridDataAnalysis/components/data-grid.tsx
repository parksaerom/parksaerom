import {HotTable} from '@handsontable/react';
import {registerAllModules} from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import {CellChange} from 'handsontable/common';
import {useDispatch, updateGridData} from '@/lib/redux';
import {useHotTable} from './data-grid-context';

registerAllModules();

export default function ExcelDataGrid() {
  const dispatch = useDispatch();
  const {hotTableComponent, triggerUpdate} = useHotTable();

  function ChangedGridData(changeData: CellChange[]) {
    dispatch(updateGridData(changeData));
    triggerUpdate();
  }

  // function BeforeChangedGridData(changeData: (CellChange | null)[]) {
  //   dispatch(updateGridData(changeData));
  //   console.log(changeData);

  //   const updatedData = gridData.map((row) => [...row]);
  //   changeData.forEach(([row, column, oldValue, newValue]) => {
  //     if (
  //       updatedData[row] &&
  //       typeof column === 'number' &&
  //       updatedData[row][column] !== undefined
  //     ) {
  //       updatedData[row][column] = newValue;
  //     }
  //   });
  //   let colData = hotTableComponent?.current?.hotInstance?.getDataAtCol(2);
  //   console.log(colData, gridData);
  //   //console.log(gridData[0]);
  //   dispatch(setGridData(updatedData));
  //   return false;
  // }

  return (
    <HotTable
      ref={hotTableComponent}
      width='100%'
      height='100%'
      rowHeaders={true}
      colHeaders={true}
      minRows={23}
      minCols={9}
      manualColumnResize={true}
      // beforeChange={(change) => {
      //   BeforeChangedGridData(change);
      // }}
      afterChange={(change) => {
        if (change) ChangedGridData(change);
      }}
      licenseKey='non-commercial-and-evaluation'
    />
  );
}

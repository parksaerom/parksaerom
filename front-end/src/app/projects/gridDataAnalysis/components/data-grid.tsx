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

  function changedGridData(changeData: CellChange[]) {
    dispatch(updateGridData(changeData));
    triggerUpdate();
  }

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
      afterChange={(change) => {
        if (change) changedGridData(change);
      }}
      licenseKey='non-commercial-and-evaluation'
    />
  );
}

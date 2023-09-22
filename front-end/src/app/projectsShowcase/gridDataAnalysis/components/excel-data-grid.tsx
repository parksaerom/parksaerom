import {useState} from 'react';
import {HotTable} from '@handsontable/react';
import {registerAllModules} from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

registerAllModules();

const data = new Array(23)
  .fill('')
  .map(() => new Array(9).fill('').map(() => ''));

export default function ExcelDataGrid() {
  return (
    <HotTable
      data={data}
      width='100%'
      height='100%'
      rowHeaders={true}
      colHeaders={true}
      manualColumnResize={true}
      licenseKey='non-commercial-and-evaluation'
    />
  );
}

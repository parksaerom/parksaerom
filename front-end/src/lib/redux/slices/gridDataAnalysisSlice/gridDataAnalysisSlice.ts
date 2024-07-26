import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CellChange} from 'handsontable/common';

export type GridDataType = 'ROW' | 'COLUMN';

export interface GridDataAnalysisState {
  gridData: string[][];
  dataType: GridDataType;
}

const initialState: GridDataAnalysisState = {
  gridData: new Array(23)
    .fill('')
    .map(() => new Array(9).fill('').map(() => '')),
  dataType: 'COLUMN',
};

export const gridDataAnalysisSlice = createSlice({
  name: 'GridDataAnalysis',
  initialState,
  reducers: {
    setGridDataType: (state, action: PayloadAction<GridDataType>) => {
      state.dataType = action.payload;
    },
    setGridData: (state, action: PayloadAction<string[][]>) => {
      state.gridData = action.payload;
    },
    updateGridData: (state, action: PayloadAction<(CellChange | null)[]>) => {
      const newData = [...state.gridData];

      action.payload.forEach((changedData) => {
        if (changedData) {
          const [row, column, oldValue, newValue] = changedData;
          if (typeof column === 'number')
            newData[row][column as number] = newValue;
        }
      });

      state.gridData = newData;
    },
    updateCell: (
      state,
      action: PayloadAction<{row: number; column: number; value: string}>,
    ) => {
      const {row, column, value} = action.payload;
      if (state.gridData[row]) {
        state.gridData[row][column] = value;
      }
    },
  },
});

export const {setGridDataType, setGridData, updateGridData, updateCell} =
  gridDataAnalysisSlice.actions;
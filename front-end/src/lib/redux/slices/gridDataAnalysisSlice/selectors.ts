import type {ReduxState} from '@/lib/redux';
import {createSelector} from '@reduxjs/toolkit';

export const selectGridData = (state: ReduxState) =>
  state.gridDataAnalysis.gridData;

export const selectRowData = (row: number) =>
  createSelector(selectGridData, (gridData) => gridData[row]);

export const selectColumnData = (column: number) =>
  createSelector(selectGridData, (gridData) =>
    gridData.map((row) => row[column]),
  );

export const selectSelectedConfidenceLevel = (state: ReduxState) =>
  state.gridDataAnalysis.selectedConfidenceLevel;

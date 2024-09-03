/* Instruments */
import {
  threeObjectControlSlice,
  gridDataAnalysisSlice,
  deviceSlice,
} from './slices';

export const reducer = {
  threeObjectControl: threeObjectControlSlice.reducer,
  gridDataAnalysis: gridDataAnalysisSlice.reducer,
  device: deviceSlice.reducer,
};

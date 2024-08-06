/* Instruments */
import {
  counterSlice,
  threeObjectControlSlice,
  gridDataAnalysisSlice,
  deviceSlice,
} from './slices';

export const reducer = {
  counter: counterSlice.reducer,
  threeObjectControl: threeObjectControlSlice.reducer,
  gridDataAnalysis: gridDataAnalysisSlice.reducer,
  device: deviceSlice.reducer,
};

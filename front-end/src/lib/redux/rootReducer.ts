/* Instruments */
import {
  counterSlice,
  threeObjectControlSlice,
  gridDataAnalysisSlice,
} from './slices';

export const reducer = {
  counter: counterSlice.reducer,
  threeObjectControl: threeObjectControlSlice.reducer,
  gridDataAnalysis: gridDataAnalysisSlice.reducer,
};

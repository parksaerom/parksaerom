/* Instruments */
import {counterSlice, threeObjectControlSlice} from './slices';

export const reducer = {
  counter: counterSlice.reducer,
  threeObjectControl: threeObjectControlSlice.reducer,
};

import type {ReduxState} from '@/lib/redux';

export const selectInside = (state: ReduxState) =>
  state.threeObjectControl.inside;
export const selectShowText = (state: ReduxState) =>
  state.threeObjectControl.showText;

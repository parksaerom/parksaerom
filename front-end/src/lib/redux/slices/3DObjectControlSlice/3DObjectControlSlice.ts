import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ThreeObjectControlState = {
  inside: false,
  showText: false,
};

export const setInsideAsync = createAsyncThunk(
  'ThreeObjectControl/setInsideAsync',
  async (payload: boolean) => {
    return payload;
  },
);

export const threeObjectControlSlice = createSlice({
  name: 'ThreeObjectControl',
  initialState,
  reducers: {
    setInside: (state, action: PayloadAction<boolean>) => {
      state.inside = action.payload;
    },
    setShowText: (state, action: PayloadAction<boolean>) => {
      state.showText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setInsideAsync.fulfilled, (state, action) => {
      state.inside = action.payload;
    });
  },
});

export const {setInside, setShowText} = threeObjectControlSlice.actions;

export interface ThreeObjectControlState {
  inside: boolean;
  showText: boolean;
}

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface DeviceState {
  isMobile: boolean;
}

const initialState: DeviceState = {
  isMobile: false,
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const {setIsMobile} = deviceSlice.actions;

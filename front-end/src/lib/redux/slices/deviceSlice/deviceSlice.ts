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
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const {setMobile} = deviceSlice.actions;

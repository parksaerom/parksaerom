import type {ReduxState} from '@/lib/redux';

export const selectDevice = (state: ReduxState) => state.device.isMobile;

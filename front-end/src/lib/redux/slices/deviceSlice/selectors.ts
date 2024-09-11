import type {ReduxState} from '@/lib/redux';

export const selectIsMobile = (state: ReduxState) => state.device.isMobile;

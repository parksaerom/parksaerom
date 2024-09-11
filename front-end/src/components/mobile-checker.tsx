'use client';

import {useEffect} from 'react';
import {useIsMobile} from '@/hooks/use-is-mobile';
import {useDispatch} from 'react-redux';
import {setIsMobile} from '@/lib/redux/slices/deviceSlice';

export default function MobileChecker() {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsMobile(isMobile));
  }, [isMobile, dispatch]);

  return null;
}

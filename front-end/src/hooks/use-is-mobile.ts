import {isMobileScreen} from '@/utils/device';
import {useEffect, useState} from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function updateDeviceType() {
      const mobile = isMobileScreen();
      setIsMobile(mobile);
    }

    updateDeviceType();

    window.addEventListener('resize', updateDeviceType);

    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return isMobile;
}

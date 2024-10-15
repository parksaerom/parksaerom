import React from 'react';
import dynamic from 'next/dynamic';
import {Props} from 'react-joyride';

const Joyride = dynamic(() => import('react-joyride'), {ssr: false});

export function JoyRide(props: Props) {
  return (
    <Joyride
      continuous
      run={true}
      showProgress
      hideBackButton
      disableScrolling
      locale={{next: '다음', last: '시작'}}
      styles={{
        options: {
          primaryColor: '#025A80',
        },
      }}
      {...props}
    />
  );
}

'use client';

import {handleScroll} from '@/utils/scroll';
import {motion} from 'framer-motion';

export default function ScrollDownButton() {
  return (
    <div className='xs:bottom-10 absolute bottom-14 flex w-full items-center justify-center'>
      <div
        onClick={() => {
          handleScroll('about');
        }}
        className='flex h-[64px] w-[35px] cursor-pointer items-start justify-center rounded-3xl border-4 border-mainBackground p-2'
      >
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className='mb-1 h-3 w-3 rounded-full bg-mainBackground'
        />
      </div>
    </div>
  );
}

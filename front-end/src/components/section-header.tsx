'use client';

import {styles} from '@/styles/common';
import {motion} from 'framer-motion';
import {textVariant} from '@/utils/motion';

interface SectionHeader {
  useMotion: boolean;
  p: string;
  h2: string;
}

export default function SectionHeader({useMotion, p, h2}: SectionHeader) {
  const Content = () => (
    <>
      <p className={styles.sectionSubText}>{p}</p>
      <h2 className={styles.sectionHeadText}>{h2}</h2>
    </>
  );

  return useMotion === true ? (
    <motion.div variants={textVariant()}>
      <Content />
    </motion.div>
  ) : (
    <Content />
  );
}

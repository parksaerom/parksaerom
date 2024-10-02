import React from 'react';
import {motion, MotionStyle} from 'framer-motion';
import {CustomVariants} from '@/utils/motion';

interface MotionComponentProps {
  children: React.ReactNode;
  variants: CustomVariants;
  style?: MotionStyle;
  className?: string;
  initial?: string;
  whileInView?: string;
  once?: boolean;
}

export function MotionDiv({
  children,
  variants,
  className = '',
  initial = 'offScreen',
  whileInView = 'onScreen',
  once = true,
}: MotionComponentProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={className}
      viewport={{once}}
    >
      {children}
    </motion.div>
  );
}

export function MotionP({
  children,
  variants,
  style = {},
  className = '',
  initial = 'offScreen',
  whileInView = 'onScreen',
  once = true,
}: MotionComponentProps) {
  return (
    <motion.p
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      className={className}
      viewport={{once}}
      style={style}
    >
      {children}
    </motion.p>
  );
}

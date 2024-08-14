import {Variants} from 'framer-motion';

export type TMotion = {
  direction: 'up' | 'down' | 'left' | 'right' | '';
  type: 'tween' | 'spring' | 'just' | '';
  delay: number;
  duration: number;
};

export const textVariant = (): Variants => {
  return {
    offScreen: {
      y: -50,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
      },
    },
  };
};

export const fadeIn = (
  direction: TMotion['direction'],
  type: TMotion['type'],
  delay: TMotion['delay'],
  duration: TMotion['duration'],
): Variants => {
  return {
    offScreen: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (
  delay: TMotion['delay'],
  duration: TMotion['duration'],
) => {
  return {
    offScreen: {
      scale: 0,
      opacity: 0,
    },
    onScreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (
  direction: TMotion['direction'],
  type: TMotion['type'],
  delay: TMotion['delay'],
  duration: TMotion['duration'],
) => {
  return {
    offScreen: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    onScreen: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};
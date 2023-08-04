import {
  Inter as FontSans,
  Nanum_Gothic,
  Gowun_Dodum,
  Gothic_A1,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontNanumGothic = Nanum_Gothic({
  weight: '400',
  subsets: ['latin'],
});

export const fontGowunDodum = Gowun_Dodum({
  weight: ['400'],
  subsets: ['latin'],
});

export const fontGothicA1 = Gothic_A1({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

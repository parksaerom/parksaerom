import {Inter as FontSans} from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontPretendard = localFont({
  style: 'normal',
  display: 'swap',
  src: '../../public/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

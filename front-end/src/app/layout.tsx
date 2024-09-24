import {Metadata} from 'next/types';
import {Providers} from '@/lib/providers';
import {ThemeProvider} from '@/components/providers';
import {fontPretendard} from '@/styles/fonts';
import {cn} from '@/lib/shadcn-ui/utils';
import '@/styles/globals.css';
import {siteConfig} from '@/config/site';
import {Toaster} from '@/components/ui/toaster';
import MobileChecker from '@/components/mobile-checker';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    '개발자',
    '웹 개발자',
    '개발자 포트폴리오',
    '웹 개발자 포트폴리오',
    '프론트엔드 개발자',
    '백엔드 개발자',
  ],
  authors: [
    {
      name: siteConfig.creator,
      //url: 'https://shadcn.com',
    },
  ],
  creator: siteConfig.creator,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  //   images: [
  //     {
  //       url: siteConfig.ogImage,
  //       width: 1200,
  //       height: 630,
  //       alt: siteConfig.name,
  //     },
  //   ],
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <Providers>
      <html lang='ko' className={fontPretendard.variable}>
        <body className={cn('relative z-0 bg-mainBackground')}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
            <Toaster />
            <MobileChecker />
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}

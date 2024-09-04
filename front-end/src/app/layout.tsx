import {Metadata} from 'next/types';

/* Components */
import {Providers} from '@/lib/providers';
import {MainHeader} from '@/components/main-header';

/* Instruments */
import {ThemeProvider} from '@/components/providers';
import {fontPretendard} from '@/styles/fonts';
import {cn} from '@/lib/shadcn-ui/utils';
import '@/styles/globals.css';
import {siteConfig} from '@/config/site';
import Main from './main/page';
import About from './about/page';
import Experience from './experience/page';
import Projects from './projects/page';
import Contact from './contact/page';

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

export default function RootLayout() {
  return (
    <Providers>
      <html lang='en' className={fontPretendard.className}>
        <body className={cn('relative z-0  bg-mainBackground')}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <div className='bg-main-pattern bg-cover bg-no-repeat'>
              <MainHeader />
              <Main />
            </div>
            <div className='container my-24 grid w-3/4 gap-y-36'>
              <About />
              <Experience />
              {/* <Projects /> */}
              <Contact />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}

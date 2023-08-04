/* Components */
import {Providers} from '@/lib/providers';
import {MainHeader} from '@/components/main-header';

/* Instruments */
import {ThemeProvider} from '@/components/providers';
import {fontGothicA1} from '@/styles/fonts';
import {cn} from '@/lib/shadcn-ui/utils';
import styles from '@/styles/layout.module.css';
import '@/styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <Providers>
      <html lang='en' className={fontGothicA1.className}>
        <body className={cn('min-h-screen bg-background antialiased')}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <div className='relative flex min-h-screen flex-col'>
              <MainHeader />
              <div className='flex-1'>{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}

import Link from 'next/link';

import {siteConfig} from '@/config/site';
import {cn} from '@/lib/shadcn-ui/utils';
import {SiTistory, SiNaver} from 'react-icons/si';
import {MainNav} from '@/components/main-nav';
import {ModeToggle} from '@/components/mode-toggle';
import {buttonVariants} from '@/components/ui/button';

export function MainHeader() {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container flex h-14 items-center'>
        <MainNav />
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='flex items-center'>
            <Link
              href={siteConfig.links.tistory}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <SiTistory className='h-4 w-4 fill-current' />
                <span className='sr-only'>Tistory</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.naver}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <SiNaver className='h-4 w-4 fill-current' />
                <span className='sr-only'>Naver</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

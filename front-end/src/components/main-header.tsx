'use client';

import Link from 'next/link';

import {siteConfig} from '@/config/site';
import {cn} from '@/lib/shadcn-ui/utils';
import {SiTistory, SiNaver} from 'react-icons/si';
import {MainNav} from '@/components/main-nav';
import {ModeToggle} from '@/components/mode-toggle';
import {buttonVariants} from '@/components/ui/button';
import {useEffect, useState} from 'react';
import {styles} from '@/styles/common';

export function MainHeader() {
  const [active, setActive] = useState<string | null>();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((current) => {
        const sectionId = current.getAttribute('id');
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener('scroll', navbarHighlighter);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', navbarHighlighter);
    };
  }, []);

  return (
    <header
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? 'bg-mainBackground' : 'bg-transparent'
      }`}
    >
      <div
        className={`container flex h-14 items-center space-x-24 ${
          scrolled ? 'text-primary' : 'text-mainBackground'
        }`}
      >
        <div className='items-center justify-between'>
          <Link
            href='/'
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <span className='text-xl font-bold leading-snug lg:text-3xl'>
              Saerom Park - Portfolio
            </span>
          </Link>
        </div>
        <MainNav />
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='flex items-center'>
            <Link
              href={siteConfig.links.tistory}
              target='_blank'
              rel='noopener noreferrer'
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
              rel='noopener noreferrer'
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

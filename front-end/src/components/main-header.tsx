'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {styles} from '@/styles/common';

export type NavIdType = 'about' | 'experience' | 'projects' | 'contact';

export type NavLinkType = {
  id: NavIdType;
  title: string;
};

const navLinks: NavLinkType[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export function MainHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [navLinks]);

  function handleScrollEvent() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
      setActiveSection('');
    }

    navLinks.forEach((navLink) => {
      const element = document.getElementById(navLink.id);
      if (element) {
        const {offsetTop, offsetHeight} = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(navLink.id);
        }
      }
    });
  }

  function handleScroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
      window.history.pushState(null, '', `#${id}`);
    }
  }

  return (
    <header
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-3 ${
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
        <ul className='relative z-10 flex max-w-max flex-1 items-center justify-center space-x-16 p-4'>
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              onClick={() => {
                handleScroll(navLink.id);
              }}
            >
              <button
                className={` ${
                  activeSection === navLink.id ? 'font-bold' : ''
                }`}
              >
                {navLink.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

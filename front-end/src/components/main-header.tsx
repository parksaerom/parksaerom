'use client';

import {NavIdType} from '@/types';
import {handleScroll} from '@/utils/scroll';
import Link from 'next/link';
import React from 'react';
import {useEffect, useState} from 'react';
import {BiMenu} from 'react-icons/bi';

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
  const [toggle, setToggle] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 z-20 flex w-full items-center py-3 ${
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
              handleScroll('main');
            }}
          >
            <span className='text-lg font-bold leading-snug lg:text-3xl'>
              Saerom Park - Portfolio
            </span>
          </Link>
        </div>

        <ul className='relative z-10 hidden max-w-max flex-1 items-center justify-center space-x-16 p-4 sm:flex'>
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

        <div className='flex flex-1 items-center justify-end sm:hidden'>
          <BiMenu
            className='h-[28px] w-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-lg bg-card bg-opacity-90 p-6 text-secondary`}
          >
            <ul className='flex flex-1 list-none flex-col items-start justify-end gap-4'>
              {navLinks.map((navLink) => {
                return navLink.id === 'projects' ? (
                  <React.Fragment key={navLink.id}></React.Fragment>
                ) : (
                  <li
                    key={navLink.id}
                    className={`font-poppins cursor-pointer text-[16px] font-medium ${
                      activeSection === navLink.id ? 'font-bold' : ''
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      handleScroll(navLink.id);
                    }}
                  >
                    {navLink.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

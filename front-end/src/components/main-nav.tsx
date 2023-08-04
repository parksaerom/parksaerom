'use client';

/* Core */
import * as React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

/* Instruments */
import {cn} from '@/lib/shadcn-ui/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {siteConfig} from '@/config/site';

const aboutMeSubMenu: {title: string; href: string; description: string}[] = [
  {
    title: 'Self-introduction/Skills',
    href: '/aboutMe/selfIntroduction',
    description: '제 자신과 보유한 기술들에 대해 소개합니다.',
  },
  {
    title: 'Project Experience',
    href: '/aboutMe/projectExperience',
    description: '제가 참여한 주요 프로젝트들을 소개합니다.',
  },
];

export const MainNav = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {aboutMeSubMenu.map((subMenu) => (
                <ListItem
                  key={subMenu.title}
                  title={subMenu.title}
                  href={subMenu.href}
                >
                  {subMenu.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects Showcase</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    <div className='mb-2 mt-4 text-lg'>Projects Showcase</div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      제가 참여한 일부 프로젝트들을 간략히 구현하였습니다.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/docs' title='Introduction'>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href='/docs/installation' title='Installation'>
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href='/docs/primitives/typography' title='Typography'>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={siteConfig.links.naver} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              GitHub
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

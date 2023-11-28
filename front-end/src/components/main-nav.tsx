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

export const MainNav = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/aboutMe' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects Showcase</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
                    <div className='mb-2 mt-4 text-lg font-medium'>
                      Projects Showcase
                    </div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      제가 참여한 일부 프로젝트들을 간략히 구현하였습니다.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href='/projectsShowcase/realTimeMonitoring'
                title='Real-time Monitoring'
              >
                실시간 데이터를 다양한 지표와 그래프를 통해 모니터링하고 분석할
                수 있습니다.
              </ListItem>
              <ListItem
                href='/projectsShowcase/gridDataAnalysis'
                title='Grid Data Analysis'
              >
                엑셀 그리드를 사용하여 데이터 입력하고 분석합니다.
              </ListItem>
              <ListItem
                href='/projectsShowcase/3DObjectControl'
                title='3D Object Control'
              >
                three.js를 활용하여 지도 상에서 3D 객체를 제어합니다.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href={siteConfig.links.github}
            target='_blank'
            rel='noopener noreferrer'
            legacyBehavior
          >
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

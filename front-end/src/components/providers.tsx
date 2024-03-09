'use client';

import * as React from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {ThemeProviderProps} from 'next-themes/dist/types';
import {useEffect, useState} from 'react';
import {TooltipProvider} from '@/components/ui/tooltip';

export function ThemeProvider({children, ...props}: ThemeProviderProps) {
  const [isClient, setIsClient] = useState<boolean>(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <NextThemesProvider {...props}>
          <TooltipProvider>{children}</TooltipProvider>
        </NextThemesProvider>
      ) : (
        <></>
      )}
    </>
  );
}

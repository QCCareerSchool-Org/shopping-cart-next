'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useCallback, useMemo, useSyncExternalStore } from 'react';

type BreakpointSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ScreenSize = 'xs' | BreakpointSize;

interface Breakpoint {
  name: BreakpointSize;
  min: number;
}

const breakpoints = [
  { name: 'sm', min: 567 },
  { name: 'md', min: 768 },
  { name: 'lg', min: 992 },
  { name: 'xl', min: 1200 },
  { name: 'xxl', min: 1400 },
] as const satisfies Breakpoint[];

const SIZE_ORDER = [ 'xs', ...breakpoints.map(b => b.name) ] as const;

export const ScreenSizeContext = createContext<ScreenSizeState | undefined>(undefined);

export type ScreenSizeComparisonFunction = (s: ScreenSize) => boolean;

export interface ScreenSizeState {
  eq: ScreenSizeComparisonFunction;
  gte: ScreenSizeComparisonFunction;
  lte: ScreenSizeComparisonFunction;
  gt: ScreenSizeComparisonFunction;
  lt: ScreenSizeComparisonFunction;
  screenSize: ScreenSize | null;
}

export const ScreenSizeProvider: FC<PropsWithChildren> = ({ children }) => {
  const mqls = useMemo(() => {
    if (typeof window === 'undefined') {
      return [];
    }
    let lastSize: number | null = null;
    return breakpoints.map(b => {
      lastSize ??= b.min;
      if (b.min < lastSize) {
        throw Error('Breakpoints must be in order from smallest to largest');
      }
      return { name: b.name, mql: window.matchMedia(getQuery(b)) };
    });
  }, []);

  const subscribe = useCallback((onStoreChange: () => void) => {
    mqls.forEach(({ mql }) => mql.addEventListener('change', onStoreChange));
    return () => mqls.forEach(({ mql }) => mql.removeEventListener('change', onStoreChange));
  }, [ mqls ]);

  const getSnapshot = useCallback((): ScreenSize => {
    // go through the list backwards and find the largest size that matches
    for (let i = mqls.length - 1; i >= 0; i--) {
      if (mqls[i].mql.matches) {
        return mqls[i].name;
      }
    }
    return 'xs';
  }, [ mqls ]);

  const screenSize = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const index = screenSize !== null ? SIZE_ORDER.indexOf(screenSize) : -1;

  const state: ScreenSizeState = {
    eq: (s: ScreenSize) => index === SIZE_ORDER.indexOf(s),
    gte: (s: ScreenSize) => index >= SIZE_ORDER.indexOf(s),
    lte: (s: ScreenSize) => index <= SIZE_ORDER.indexOf(s),
    gt: (s: ScreenSize) => index > SIZE_ORDER.indexOf(s),
    lt: (s: ScreenSize) => index < SIZE_ORDER.indexOf(s),
    screenSize,
  };

  return (
    <ScreenSizeContext.Provider value={state}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

const getQuery = (b: Breakpoint): string => {
  return `(min-width: ${b.min}px)`;
};

const getServerSnapshot = () => null;

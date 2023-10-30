'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

export const ScreenWidthContext = createContext<number | undefined>(undefined);

export const ScreenWidthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useState(0);

  useEffect(() => {
    const listener = (): void => dispatch(window.innerWidth);
    window.addEventListener('resize', listener);
    listener();
    return () => window.removeEventListener('resize', listener);
  }, []);

  return (
    <ScreenWidthContext.Provider value={state}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

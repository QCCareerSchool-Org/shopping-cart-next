'use client';

import { useContext } from 'react';

import type { ScreenSizeState } from '@/providers/screenSizeProvider';
import { ScreenSizeContext } from '@/providers/screenSizeProvider';

export const useScreenSizeContext = (): ScreenSizeState => {
  const context = useContext(ScreenSizeContext);
  if (context === undefined) {
    throw new Error('useScreenSizeContext must be used within a ScreenSizeProvider');
  }
  return context;
};

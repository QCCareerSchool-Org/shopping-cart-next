'use client';

import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import MobileEnds from './mobile-ends.jpg';
import { PromoImage } from '@/components/promoImage';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260506: FC<Props> = ({ variant }) => {

  const [ desktopSrc, mobileSrc ] = variant === 'lastChance' ?
    [ DesktopEnds, MobileEnds ] : [ DesktopEnds, MobileEnds ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

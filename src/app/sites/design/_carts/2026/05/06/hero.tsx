'use client';

import type { FC } from 'react';

import DesktopCAONEnds from './desktop-ends-ca-on.jpg';
import DesktopEnds from './desktop-ends.jpg';
import MobileCAONEnds from './mobile-ends-ca-on.jpg';
import MobileEnds from './mobile-ends.jpg';
import { PromoImage } from '@/components/promoImage';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260506: FC<Props> = ({ variant }) => {

  const [ desktopSrc, mobileSrc ] = variant === 'lastChance' ?
    [ DesktopCAONEnds, MobileCAONEnds ] : [ DesktopEnds, MobileEnds ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

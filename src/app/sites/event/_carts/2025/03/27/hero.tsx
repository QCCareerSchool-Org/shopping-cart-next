'use client';

import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import DesktopUKEnds from './desktop-uk-ends.jpg';
import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import MobileUKEnds from './mobile-uk-ends.jpg';
import MobileUK from './mobile-uk.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  variant?: 'lastChance';
};

export const Hero20250327: FC<Props> = ({ variant }) => {
  const priceState = usePriceState();
  const [ desktopSrc, mobileSrc ] = getSrcs(variant, priceState?.currency.code);
  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

const getSrcs = (variant?: 'lastChance', currencyCode?: string): [ StaticImageData, StaticImageData ] => {
  if (variant === 'lastChance') {
    return currencyCode === 'GBP' ? [ DesktopUKEnds, MobileUKEnds ] : [ DesktopEnds, MobileEnds ];
  }
  return currencyCode === 'GBP' ? [ DesktopUK, MobileUK ] : [ Desktop, Mobile ];
};

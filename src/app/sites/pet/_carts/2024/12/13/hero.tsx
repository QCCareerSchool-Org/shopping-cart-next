'use client';

import type { FC } from 'react';

import DesktopUKEnds from './desktop-ends-uk.jpg';
import DesktopEnds from './desktop-ends.jpg';
import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileUKEnds from './mobile-ends-uk.jpg';
import MobileEnds from './mobile-ends.jpg';
import MobileUK from './mobile-uk.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  lastChance: boolean;
};

export const Hero20241213: FC<Props> = ({ lastChance }) => {
  const priceState = usePriceState();

  const [ desktopSrc, mobileSrc ] = lastChance
    ? priceState?.currency.code === 'GBP' ? [ DesktopUKEnds, MobileUKEnds ] : [ DesktopEnds, MobileEnds ]
    : priceState?.currency.code === 'GBP' ? [ DesktopUK, MobileUK ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

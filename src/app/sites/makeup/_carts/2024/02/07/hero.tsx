'use client';

import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  lastChance?: boolean;
};

export const Hero: FC<Props> = ({ lastChance }) => {
  const priceState = usePriceState();

  const [ desktopSrc, mobileSrc ] = lastChance
    ? [ DesktopEnds, MobileEnds ]
    : priceState?.currency.code === 'GBP'
      ? [ Desktop, Mobile ]
      : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

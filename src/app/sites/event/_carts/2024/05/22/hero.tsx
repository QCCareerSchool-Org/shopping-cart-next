'use client';

import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import MobileUK from './mobile-uk.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  lastChance: boolean;
};

export const Hero: FC<Props> = ({ lastChance }) => {
  const price = usePriceState();

  const [ desktopSrc, mobileSrc ] = lastChance
    ? [ DesktopEnds, MobileEnds ]
    : price?.currency.code === 'GBP'
      ? [ Desktop, Mobile ]
      : [ DesktopUK, MobileUK ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

'use client';

import type { FC } from 'react';

import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileUK from './mobile-uk.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  variant?: 'lastChance';
};

export const Hero20251129: FC<Props> = () => {
  const priceState = usePriceState();

  const [ desktopSrc, mobileSrc ] = priceState?.currency.code === 'GBP'
    ? [ DesktopUK, MobileUK ]
    : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

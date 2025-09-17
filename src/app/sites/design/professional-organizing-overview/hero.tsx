'use client';

import type { FC } from 'react';

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

export const POHero: FC<Props> = ({ variant }) => {
  const priceState = usePriceState();

  const [ desktopSrc, mobileSrc ] = variant === 'lastChance'
    ? priceState?.currency.code === 'GBP' ? [ Desktop, MobileUKEnds ] : [ Desktop, MobileEnds ]
    : priceState?.currency.code === 'GBP' ? [ Desktop, MobileUK ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

'use client';

import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import DesktopExtended from './desktop-extended.jpg';
import DesktopUKEnds from './desktop-uk-ends.jpg';
import DesktopUKExtended from './desktop-uk-extended.jpg';
import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import MobileExtended from './mobile-extended.jpg';
import MobileUKEnds from './mobile-uk-ends.jpg';
import MobileUKExtended from './mobile-uk-extended.jpg';
import MobileUK from './mobile-uk.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  variant?: 'lastChance' | 'extended';
};

export const Hero20241226: FC<Props> = ({ variant }) => {
  const priceState = usePriceState();

  const [ desktopSrc, mobileSrc ] = variant === 'extended'
    ? priceState?.currency.code === 'GBP' ? [ DesktopUKExtended, MobileUKExtended ] : [ DesktopExtended, MobileExtended ]
    : variant === 'lastChance'
      ? priceState?.currency.code === 'GBP' ? [ DesktopUKEnds, MobileUKEnds ] : [ DesktopEnds, MobileEnds ]
      : priceState?.currency.code === 'GBP' ? [ DesktopUK, MobileUK ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

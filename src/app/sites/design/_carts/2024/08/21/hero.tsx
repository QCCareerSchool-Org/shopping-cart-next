'use client';

import type { FC } from 'react';

import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileUK from './mobile-uk.jpg';
import Mobile from './mobile.jpg';
import Round2DesktopEnds from './round2-desktop-ends.jpg';
import Round2DesktopUK from './round2-desktop-uk.jpg';
import Round2Desktop from './round2-desktop.jpg';
import Round2MobileEnds from './round2-mobile-ends.jpg';
import Round2MobileUK from './round2-mobile-uk.jpg';
import Round2Mobile from './round2-mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  round2: boolean;
  lastChance: boolean;
};

export const Hero: FC<Props> = ({ round2, lastChance }) => {
  const priceState = usePriceState();

  const [ desktopSrc, mobileSrc ] = round2
    ? lastChance
      ? [ Round2DesktopEnds, Round2MobileEnds ]
      : priceState?.currency.code === 'GBP' ? [ Round2DesktopUK, Round2MobileUK ] : [ Round2Desktop, Round2Mobile ]
    : priceState?.currency.code === 'GBP' ? [ DesktopUK, MobileUK ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

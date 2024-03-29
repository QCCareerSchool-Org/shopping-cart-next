'use client';

import type { FC } from 'react';

import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileUK from './mobile-uk.jpg';
import Mobile from './mobile.jpg';
import DesktopUKNew from './new/desktop-uk.jpg';
import DesktopNew from './new/desktop.jpg';
import MobileUKNew from './new/mobile-uk.jpg';
import MobileNew from './new/mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  newPromo: boolean;
};

export const Hero: FC<Props> = ({ newPromo }) => {
  const priceState = usePriceState();

  const [ desktopSrc, mobileSrc ] = newPromo
    ? priceState?.currency.code === 'GBP' ? [ DesktopUKNew, MobileUKNew ] : [ DesktopNew, MobileNew ]
    : priceState?.currency.code === 'GBP' ? [ DesktopUK, MobileUK ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

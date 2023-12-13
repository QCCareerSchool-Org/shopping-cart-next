'use client';

import type { FC } from 'react';

import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileUK from './mobile-uk.jpg';
import Mobile from './mobile.jpg';

import NewDesktop from './new-desktop.jpg';
import NewMobile from './new-mobile.jpg';

import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  newImages: boolean;
};

export const Hero: FC<Props> = ({ newImages }) => {
  const priceState = usePriceState();

  const [ desktopSrc, mobileSrc ] = newImages
    ? [ NewDesktop, NewMobile ]
    : priceState?.currency.code === 'GBP'
      ? [ DesktopUK, MobileUK ]
      : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

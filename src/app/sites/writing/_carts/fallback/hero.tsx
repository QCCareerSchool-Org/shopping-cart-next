'use client';

import type { FC } from 'react';

import DesktopAU from './desktop-au.jpg';
import DesktopGB from './desktop-gb.jpg';
import DesktopNZ from './desktop-nz.jpg';
import Desktop from './desktop.jpg';
import MobileAU from './mobile-au.jpg';
import MobileGB from './mobile-gb.jpg';
import MobileNZ from './mobile-nz.jpg';
import Mobile from './mobile.jpg';

import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

export const Hero: FC = () => {
  const priceState = usePriceState();

  const [ desktopSrc, mobileSrc ] = priceState?.currency.code === 'GBP'
    ? [ DesktopGB, MobileGB ]
    : priceState?.currency.code === 'AUD'
      ? [ DesktopAU, MobileAU ]
      : priceState?.currency.code === 'NZD'
        ? [ DesktopNZ, MobileNZ ]
        : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

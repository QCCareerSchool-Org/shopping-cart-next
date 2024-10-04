'use client';

import type { FC } from 'react';

import Desktop116 from './desktop-116.jpg';
import Desktop from './desktop-92.jpg';
import DesktopAU from './desktop-au.jpg';
import DesktopGB from './desktop-gb.jpg';
import DesktopNZ from './desktop-nz.jpg';
import Mobile116 from './mobile-116.jpg';
import Mobile from './mobile-92.jpg';
import MobileAU from './mobile-au.jpg';
import MobileGB from './mobile-gb.jpg';
import MobileNZ from './mobile-nz.jpg';
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
        : priceState?.courses.some(c => c.plans.part.deposit === 116)
          ? [ Desktop116, Mobile116 ]
          : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

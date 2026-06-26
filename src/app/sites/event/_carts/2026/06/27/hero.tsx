import type { FC } from 'react';

import DesktopCA from './desktop-ca.jpg';
import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileCA from './mobile-ca.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260627: FC<Props> = () => {
  const priceState = usePriceState();
  const [ desktopSrc, mobileSrc ] = priceState?.currency.code === 'CAD' ? [ DesktopCA, MobileCA ] : priceState?.currency.code === 'GBP' ? [ DesktopUK, Mobile ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

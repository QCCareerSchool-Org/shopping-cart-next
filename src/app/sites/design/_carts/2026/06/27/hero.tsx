import type { FC } from 'react';

import DesktopCA from './desktop-ca.jpg';
import DesktopUK from './desktop-uk.jpg';
import DesktopUS from './desktop-us.jpg';
import MobileCA from './mobile-ca.jpg';
import MobileUK from './mobile-uk.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260627: FC<Props> = () => {
  const priceState = usePriceState();
  const [ desktopSrc, mobileSrc ] = priceState?.currency.code === 'CAD' ? [ DesktopCA, MobileCA ] : priceState?.currency.code === 'GBP' ? [ DesktopUK, MobileUK ] : [ DesktopUS, Mobile ];
  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

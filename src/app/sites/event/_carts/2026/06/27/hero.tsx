import type { FC } from 'react';

import DesktopCAEnds from './desktop-ca-ends.jpg';
import DesktopCA from './desktop-ca.jpg';
import DesktopEnds from './desktop-ends.jpg';
import DesktopUK from './desktop-uk.jpg';
import Desktop from './desktop.jpg';
import MobileCAEnds from './mobile-ca-ends.jpg';
import MobileCA from './mobile-ca.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260627: FC<Props> = ({ variant }) => {
  const priceState = usePriceState();
  const [ desktopSrc, mobileSrc ] = variant === 'lastChance'
    ? priceState?.currency.code === 'CAD' ? [ DesktopCAEnds, MobileCAEnds ] : [ DesktopEnds, MobileEnds ]
    : priceState?.currency.code === 'CAD' ? [ DesktopCA, MobileCA ] : priceState?.currency.code === 'GBP' ? [ DesktopUK, Mobile ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

import type { FC } from 'react';

import DesktopCAEnds from './desktop-ca-ends.jpg';
import DesktopCA from './desktop-ca.jpg';
import DesktopEnds from './desktop-ends.jpg';
import MobileEnds from './desktop-mobile-ends.jpg';
import MobileUKEnds from './desktop-mobile-uk-ends.jpg';
import MobileUK from './desktop-mobile-uk.jpg';
import Mobile from './desktop-mobile.jpg';
import DesktopUKEnds from './desktop-uk-ends.jpg';
import DesktopUK from './desktop-uk.jpg';
import DesktopUSEnds from './desktop-us-ends.jpg';
import DesktopUS from './desktop-us.jpg';
import Desktop from './desktop.jpg';
import MobileCAEnds from './mobile-ca-ends.jpg';
import MobileCA from './mobile-ca.jpg';
import MobileUSEnds from './mobile-us-ends.jpg';
import MobileUS from './mobile-us.jpg';
import { PromoImage } from '@/components/promoImage';
import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260627: FC<Props> = ({ variant }) => {
  const priceState = usePriceState();
  const [ desktopSrc, mobileSrc ] = variant === 'lastChance'
    ? priceState?.currency.code === 'GBP' ? [ DesktopUKEnds, MobileUKEnds ] :
      priceState?.currency.code === 'USD' ? [ DesktopUSEnds, MobileUSEnds ] :
        priceState?.currency.code === 'CAD' ? [ DesktopCAEnds, MobileCAEnds ] :
          [ DesktopEnds, MobileEnds ]
    : priceState?.currency.code === 'GBP' ? [ DesktopUK, MobileUK ] :
      priceState?.currency.code === 'USD' ? [ DesktopUS, MobileUS ] :
        priceState?.currency.code === 'CAD' ? [ DesktopCA, MobileCA ] :
          [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

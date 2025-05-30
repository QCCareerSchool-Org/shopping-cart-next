import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

type Props = {
  lastChance: boolean;
};

export const Hero20241106: FC<Props> = ({ lastChance }) => {
  const [ desktopSrc, mobileSrc ] = lastChance
    ? [ DesktopEnds, MobileEnds ]
    : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import DesktopExtended from './desktop-extended.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import MobileExtended from './mobile-extended.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

type Props = {
  variant?: 'lastChance' | 'extended';
};

export const Hero20241226: FC<Props> = ({ variant }) => {
  const [ desktopSrc, mobileSrc ] = variant === 'extended'
    ? [ DesktopExtended, MobileExtended ]
    : variant === 'lastChance'
      ? [ DesktopEnds, MobileEnds ]
      : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

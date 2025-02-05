import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

type Props = {
  variant?: 'lastChance';
};

export const Hero20250206: FC<Props> = ({ variant }) => {
  const [ desktopSrc, mobileSrc ] = variant === 'lastChance'
    ? [ DesktopEnds, MobileEnds ]
    : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

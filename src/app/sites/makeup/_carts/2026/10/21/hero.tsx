import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

interface Props {
  variant?: 'lastChance' | 'extension';
}

export const Hero20261021: FC<Props> = ({ variant }) => {
  const [ desktopSrc, mobileSrc ] = variant === 'lastChance' || variant === 'extension'
    ? [ DesktopEnds, MobileEnds ]
    : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

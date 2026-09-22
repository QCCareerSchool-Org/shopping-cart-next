import type { FC } from 'react';

import DesktopEnds from './grooming-desktop-ends.jpg';
import Desktop from './grooming-desktop.jpg';
import MobileEnds from './grooming-mobile-ends.jpg';
import Mobile from './grooming-mobile.jpg';
import { PromoImage } from '@/components/promoImage';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260923: FC<Props> = ({ variant }) => {
  const [ desktopSrc, mobileSrc ] = variant === 'lastChance' ? [ DesktopEnds, MobileEnds ] : [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import Mobile from './mobile.jpg';
import MobileEnds from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260814: FC<Props> = ({ variant }) => {
  const [ desktopSrc, mobileSrc ] = variant === 'lastChance' ? [ DesktopEnds, MobileEnds ] : [ Desktop, Mobile ];
  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

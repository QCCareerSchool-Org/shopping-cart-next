import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

type Props = {
  lastChance?: boolean;
};

export const Hero: FC<Props> = ({ lastChance }) => {
  return (
    <PromoImage
      desktopSrc={lastChance ? DesktopEnds : Desktop}
      mobileSrc={lastChance ? MobileEnds : Mobile}
    />
  );
};

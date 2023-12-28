import type { FC } from 'react';

import DesktopNY from './desktop-cm.jpg';
import Desktop from './desktop.jpg';
import MobileNY from './mobile-cm.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

type Props = {
  newYears: boolean;
};

export const Hero: FC<Props> = ({ newYears }) => {
  if (newYears) {
    return <PromoImage desktopSrc={DesktopNY} mobileSrc={MobileNY} />;
  }
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />;
};

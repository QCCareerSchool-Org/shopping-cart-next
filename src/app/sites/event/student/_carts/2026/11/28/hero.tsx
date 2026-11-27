import type { FC } from 'react';

import Desktop from './desktop.png';
import Mobile from './mobile.png';
import { PromoImage } from '@/components/promoImage';

export const HeroStudent20261128: FC = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />;
};

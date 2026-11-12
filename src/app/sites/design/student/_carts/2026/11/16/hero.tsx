import type { FC } from 'react';

import Mobile from './design-mobile-bf.jpg';
import Desktop from './desktop-bf.jpg';
import { PromoImage } from '@/components/promoImage';

export const HeroStudent20261116: FC = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />;
};

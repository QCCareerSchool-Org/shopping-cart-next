import type { FC } from 'react';

import Mobile from './design-mobile-earlyh-bf.jpg';
import Desktop from './desktop-bf-early.jpg';
import { PromoImage } from '@/components/promoImage';

export const Hero20261021: FC = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />;
};

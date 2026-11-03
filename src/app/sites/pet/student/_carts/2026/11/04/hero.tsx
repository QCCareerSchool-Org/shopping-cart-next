import type { FC } from 'react';

import Desktop from './desktop-bf-early.jpg';
import Mobile from './pet-mobile-early-bf.jpg';
import { PromoImage } from '@/components/promoImage';

export const Hero20261104: FC = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} maxWidth={1000} />;
};

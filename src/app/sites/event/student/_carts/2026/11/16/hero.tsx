import type { FC } from 'react';

import Desktop from './desktop-bf.jpg';
import Mobile from './event-mobile-bf.jpg';
import { PromoImage } from '@/components/promoImage';

export const HeroStudent20261116: FC = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />;
};

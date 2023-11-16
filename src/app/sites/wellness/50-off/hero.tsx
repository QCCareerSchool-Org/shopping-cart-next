import type { FC } from 'react';

import Desktop from './desktop-50.jpg';
import Mobile from './mobile-50.jpg';
import { PromoImage } from '@/components/promoImage';

export const Hero: FC = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />;
};

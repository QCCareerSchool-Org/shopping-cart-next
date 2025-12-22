import type { FC } from 'react';

import Desktop from './desktop.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

export const Hero20251226: FC = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />;
};

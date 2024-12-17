import type { FC } from 'react';

import Desktop from './desktop.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

export const Hero20241226: FC = () => (
  <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />
);

import type { FC } from 'react';

import Desktop from './desktop.jpg';
import { PromoImage } from '@/components/promoImage';

export const Hero: FC = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Desktop} />;
};

import type { FC } from 'react';

import Desktop from './desktop.webp';
import Mobile from './mobile.webp';
import { PromoImage } from '@/components/promoImage';

export const Hero: FC = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} maxWidth={1055} />;
};

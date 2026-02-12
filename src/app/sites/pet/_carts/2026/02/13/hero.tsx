import type { FC } from 'react';

import Desktop from './desktop.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260213: FC<Props> = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />;
};

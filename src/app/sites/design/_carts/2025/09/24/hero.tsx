import type { FC } from 'react';

import Desktop from './desktop.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

interface Props {
  variant?: 'lastChance';
}

export const Hero20250924: FC<Props> = () => {
  return <PromoImage desktopSrc={Desktop} mobileSrc={Mobile} />;
};

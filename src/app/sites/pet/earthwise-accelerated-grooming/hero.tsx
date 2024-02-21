import type { FC } from 'react';

// import Desktop from './desktop.jpg';
// import Mobile from './mobile.jpg';
import Harold from './hidethepainharold.jpg';
import { PromoImage } from '@/components/promoImage';

export const Hero: FC = () => {
  return <PromoImage desktopSrc={Harold} mobileSrc={Harold} />;
};

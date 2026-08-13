import type { FC } from 'react';

import Desktop from './desktop.jpg';
import Mobile from './mobile.jpg';
import { PromoImage } from '@/components/promoImage';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260826: FC<Props> = () => {
  const [ desktopSrc, mobileSrc ] = [ Desktop, Mobile ];

  return <PromoImage desktopSrc={desktopSrc} mobileSrc={mobileSrc} />;
};

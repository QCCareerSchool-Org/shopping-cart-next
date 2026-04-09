import Image from 'next/image';
import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import TabletEnds from './tablet-ends.jpg';
import Tablet from './tablet.jpg';
import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260409: FC<Props> = ({ variant }) => {
  const { gte } = useScreenSizeContext();

  const src = gte('xl')
    ? variant === 'lastChance' ? DesktopEnds : Desktop
    : gte('md')
      ? variant === 'lastChance' ? TabletEnds : Tablet
      : variant === 'lastChance' ? MobileEnds : Mobile;

  return (
    <div style={{ textAlign: 'center' }}>
      <Image src={src} priority alt="" className="img-fluid" style={{ width: '100%' }} />
    </div>
  );
};

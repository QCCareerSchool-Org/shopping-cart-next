import Image from 'next/image';
import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';
import TabletEnds from './tablet-ends.jpg';
import Tablet from './tablet.jpg';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260409: FC<Props> = ({ variant }) => {
  const [ desktopSrc, tabletSrc, mobileSrc ] = variant === 'lastChance'
    ? [ DesktopEnds, TabletEnds, MobileEnds ]
    : [ Desktop, Tablet, Mobile ];

  return (
    <div style={{ textAlign: 'center' }}>
      <Image src={desktopSrc} priority alt="" className="img-fluid d-none d-xl-block" style={{ width: '100%' }} />
      <Image src={tabletSrc} priority alt="" className="img-fluid d-none d-md-block d-xl-none" style={{ width: '100%' }} />
      <Image src={mobileSrc} priority alt="" className="img-fluid d-md-none" style={{ width: '100%' }} />
    </div>
  );
};

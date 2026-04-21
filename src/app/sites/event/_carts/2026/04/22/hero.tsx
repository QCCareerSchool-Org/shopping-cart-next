import Image from 'next/image';
import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';

interface Props {
  variant?: 'lastChance';
}

export const Hero20260422: FC<Props> = ({ variant }) => {
  const [ desktopSrc, mobileSrc ] = variant === 'lastChance'
    ? [ DesktopEnds, MobileEnds ]
    : [ Desktop, Mobile ];

  return (
    <div style={{ textAlign: 'center' }}>
      <Image src={desktopSrc} priority alt="" className="img-fluid d-none d-md-block" style={{ width: '100%' }} />
      <Image src={mobileSrc} priority alt="" className="img-fluid d-md-none" style={{ width: '100%' }} />
    </div>
  );
};

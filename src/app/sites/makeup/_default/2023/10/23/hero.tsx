'use client';

import Image from 'next/image';
import type { FC } from 'react';

import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';

type Props = {
  lastChance?: boolean;
};

export const Hero: FC<Props> = ({ lastChance }) => {
  return (
    <>
      <Image src={lastChance ? DesktopEnds : Desktop} priority alt="" className="img-fluid d-none d-md-inline" style={{ width: '100%' }} />
      <Image src={lastChance ? MobileEnds : Mobile} priority alt="" className="img-fluid d-md-none" style={{ width: '100%' }} />;
    </>
  );
};

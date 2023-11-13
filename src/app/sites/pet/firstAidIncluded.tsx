'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import FirstAidLogo from './first-aid-icon.svg';
import { useScreenWidth } from '@/hooks/useScreenWidth';

export const FirstAidIncluded: FC = () => {
  const screenWidth = useScreenWidth();
  return (
    <div className="text-uppercase d-flex align-items-center justify-content-center">
      <Image src={FirstAidLogo as StaticImageData} className="me-2 d-block" alt="" />
      <div className="text-center"><strong><span style={{ color: '#e9213e' }}>Free first aid training</span>{screenWidth < 576 ? <br /> : ' '}included with all courses</strong></div>
    </div>
  );
};

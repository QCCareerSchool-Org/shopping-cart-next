'use client';

import Image from 'next/image';
import type { FC } from 'react';

import FirstAidLogo from './first-aid-icon.svg';
import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';

export const FirstAidIncluded: FC = () => {
  const { lt } = useScreenSizeContext();

  return (
    <div className="text-uppercase d-flex align-items-center justify-content-center">
      <Image src={FirstAidLogo} className="me-2 d-block" alt="" />
      <div className="text-center"><strong><span style={{ color: '#e9213e' }}>Free first aid training</span>{lt('sm') ? <br /> : ' '}included with all courses</strong></div>
    </div>
  );
};

'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import Logo from './logo.svg';
import { useGlobalState } from '@/hooks/useGlobalState';

const tel = '1-800';

export const Header: FC = () => {
  const [ globalState ] = useGlobalState();
  return (
    <header>
      <div className="container py-3 py-sm-4">
        <div className="row">
          <span className="text-primary">{globalState.countryCode}</span>
          <div className="col-9 col-sm-12 text-left text-sm-center"><a href="https://www.qcmakeupacademy.com/"><Image src={Logo as StaticImageData} alt="QC Makeup Academy" /></a></div>
          <div className="col-3 d-block d-sm-none text-right"><a title="Click to Call" href={'tel:' + tel}>{tel}</a></div>
        </div>
      </div>
    </header>
  );
};

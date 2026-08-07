'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { FaPhone } from 'react-icons/fa';

import Logo from './logo.svg';
import { useAddressState } from '@/hooks/useAddressState';
import { telephoneNumber } from '@/lib/telephone';

const backgroundColor = '#fff';

export const Header: FC = () => {
  const { countryCode } = useAddressState();
  const tel = telephoneNumber(countryCode);
  return (
    <header className="text-white" style={{ backgroundColor }}>
      <div className="container py-3 py-sm-4">
        <div className="row">
          <div className="col-9 col-sm-12 text-start text-sm-center"><a href="https://www.qcpetstudies.com/"><Image src={Logo} className="img-fluid" alt="QC Pet Studies" style={{ height: 32 }} /></a></div>
          <div className="col-3 d-sm-none text-end"><a title="Click to Call" href={'tel:' + tel}><FaPhone size={32} /></a></div>
        </div>
      </div>
    </header>
  );
};

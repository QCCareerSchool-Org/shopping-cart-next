'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { FaPhone } from 'react-icons/fa';

import Logo from './logo.svg';
import { useAddressState } from '@/hooks/useAddressState';
import { telephoneNumber } from '@/lib/telephone';

const backgroundColor = 'white';

export const Header: FC = () => {
  const { countryCode } = useAddressState();
  const tel = telephoneNumber(countryCode);
  return (
    <header style={{ backgroundColor }}>
      <div className="container py-3 py-sm-4">
        <div className="row">
          <div className="col-9 col-sm-12 text-start text-sm-center"><a href="https://www.qceventplanning.com/"><Image src={Logo} priority className="img-fluid" alt="QC Event School" style={{ height: 30 }} /></a></div>
          <div className="col-3 d-sm-none text-end"><a title="Click to Call" href={'tel:' + tel}><FaPhone size={30} /></a></div>
        </div>
      </div>
    </header>
  );
};

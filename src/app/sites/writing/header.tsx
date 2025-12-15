'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { FaPhone } from 'react-icons/fa';

import styles from './header.module.scss';
import LogoLg from './logo-lg.svg';
import LogoSm from './logo-sm.svg';
import { useAddressState } from '@/hooks/useAddressState';
import { telephoneNumber } from '@/lib/telephone';

export const Header: FC = () => {
  const { countryCode } = useAddressState();
  const tel = telephoneNumber(countryCode);
  return (
    <header className={styles.header}>
      <div className="container py-3 py-sm-4">
        <div className="row">
          <div className="col-9 col-sm-12 text-start text-sm-center"><a href="https://www.winghill.com/">
            <Image src={LogoSm} className={`img-fluid d-sm-none`} alt="Winghill Writing School" style={{ height: 14, width: 'auto' }} />
            <Image src={LogoLg} className={`img-fluid d-none d-sm-inline`} alt="Winghill Writing School" style={{ height: 14, width: 'auto' }} />
          </a></div>
          <div className="col-3 d-sm-none text-end"><a title="Click to Call" href={'tel:' + tel}><FaPhone size={32} /></a></div>
        </div>
      </div>
    </header>
  );
};

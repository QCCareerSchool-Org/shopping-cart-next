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
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 col-sm-12 text-start"><a href="https://www.qcwellnessstudies.com/">
            <Image src={LogoSm} className={`img-fluid d-sm-none`} alt="QC Wellness studies" style={{ height: 36, width: 'auto' }} />
            <Image src={LogoLg} className={`img-fluid d-none d-sm-inline`} alt="QC Wellness studies" style={{ height: 36, width: 'auto' }} />
          </a></div>
          <div className="col-3 d-sm-none text-end"><a title="Click to Call" href={'tel:' + tel}><FaPhone size={32} /></a></div>
        </div>
      </div>
    </header>
  );
};

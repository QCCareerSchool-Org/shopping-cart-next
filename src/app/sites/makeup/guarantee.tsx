'use client';

import Image from 'next/image';
import type { FC } from 'react';

import { GuaranteeModal } from './guaranteeModal';
import FourteenDays from '@/app/14-day.svg';
import { useToggle } from '@/hooks/useToggle';

export const Guarantee: FC = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const handleHide = (): void => {
    togglePopup();
  };

  return (
    <div className="row d-flex align-items-center">
      <div className="col-12 col-md-6 text-center text-md-end mb-3 mb-md-0">
        <button type="button" className="btn btn-link p-0 btn-no-hover-shadow" onClick={handleClick}><Image src={FourteenDays} width="97" height="100" className="img-fluid" alt="14-Day Money-Back Guarantee" /></button>
      </div>
      <div className="col-12 col-md-6 text-center text-md-start">
        <h3 className="h5">Try the School Risk Free for 14 Days</h3>
        <button type="button" className="btn btn-link p-0 p-0 btn-no-hover-shadow" onClick={handleClick}>Learn More</button>
      </div>
      <GuaranteeModal show={showPopup} onHide={handleHide} />
    </div>
  );
};

'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import { GuaranteeModal } from './guaranteeModal';
import TwentyOneDays from '@/app/21-day.svg';
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
        <button type="button" className="btn btn-link p-0 btn-no-hover-shadow" onClick={handleClick}><Image src={TwentyOneDays as StaticImageData} width="97" height="100" className="img-fluid" alt="21-Day Money-Back Guarantee" /></button>
      </div>
      <div className="col-12 col-md-6 text-center text-md-start">
        <h5>21-Day Money-Back Guarantee</h5>
        <button type="button" className="btn btn-link p-0 p-0 btn-no-hover-shadow" onClick={handleClick}>Learn More</button>
      </div>
      <GuaranteeModal show={showPopup} onHide={handleHide} />
    </div>
  );
};

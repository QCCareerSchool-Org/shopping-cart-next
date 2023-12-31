'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#38352e';

export const DesignMasterclass150OffPromo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const [ savings, deposit, fullDiscount ] = priceState?.currency.code === 'GBP'
    ? [ '£150', '£40', '£300' ]
    : [ '$150', '$75', '$350' ];

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Masterclass</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>As a special gift for attending the masterclass, when you enroll in Interior Decorating, we'll give you a second certification course absolutely FREE!</p>
          <p><strong>We're also giving you {savings} off your tuition!</strong></p>
          <p className="mb-0">Get started for only {deposit} or save up to {fullDiscount} when you pay in full.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

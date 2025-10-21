'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#223d4d';

export const DesignBogo1Promo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const [ fullDiscount, discount ] = priceState?.currency.code === 'GBP'
    ? [ '£500', '£100' ]
    : [ '$500', '$100' ];

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Special Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ready to start your home design career?</p>
          <p>For a limited time only, enroll in any design course and get a second certification course for FREE! You'll also save {discount} off your total tuition, or save up to {fullDiscount} when you pay in full!</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

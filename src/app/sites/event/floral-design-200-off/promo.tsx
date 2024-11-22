'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#000';

export const EventFloralDesign200OffPromo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const [ savings, deposit, fullDiscount ] = priceState?.currency.code === 'GBP'
    ? [ '£200', '£49', '£150' ]
    : [ '$200', '$49', '$400' ];

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
          <p className="mb-0">When you enroll in QC's Floral Design course, you'll save {savings} on your tuition! You can get started for {deposit} or save an additional {fullDiscount} if you decide to pay in full.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

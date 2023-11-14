'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#000';

export const PetFreeTraining300OffPromo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const [ promotionalDiscount, deposit, fullDiscount ] = priceState?.currency.code === 'GBP'
    ? [ '£300', '£99', '£300' ]
    : [ '$300', '$99', '$400' ];

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Save {promotionalDiscount}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>For a limited time only, save {promotionalDiscount} off your tuition!</p>
          <p className="mb-0">Get started today for only {deposit}, or save up to an additional {fullDiscount} when you pay in full.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

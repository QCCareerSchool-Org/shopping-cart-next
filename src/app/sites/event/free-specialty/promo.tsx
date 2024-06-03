'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#2d232b';

export const EventFreeSpecialtyPromo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const [ deposit, fullDiscount ] = priceState?.currency.code === 'GBP'
    ? [ '£49', '£150' ]
    : [ '$49', '$300' ];

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
          <p>Ready to start your event planning career?</p>
          <p>Enroll in any foundation course and get a specialty course for free.</p>
          <p>This means you'll graduate with two professional certifications for the price of one (saving up to {potentialSavings(priceState?.currency.code ?? 'USD')} on your training)!</p>
          <p className="mb-0">Get started for {deposit}, or save up to {fullDiscount} when you pay your tuition in full.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

const potentialSavings = (currencyCode: string): string => {
  return currencyCode === 'GBP'
    ? '£778'
    : currencyCode === 'AUD'
      ? '$1289'
      : currencyCode === 'NZD'
        ? '$1358'
        : '$1039';
};

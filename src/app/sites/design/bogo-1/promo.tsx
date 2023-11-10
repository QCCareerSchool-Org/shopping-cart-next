'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#090a0c';

export const DesignBogo1Promo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const [ deposit, fullDiscount ] = priceState?.currency.code === 'GBP'
    ? [ '£40', '£350' ]
    : [ '$75', '$400' ];

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
          <p>For a limited time only, enroll in any design course and get a second certification course for FREE! This means you could save up to {potentialSavings(priceState?.currency.code ?? 'USD')} on your tuition.</p>
          <p className="mb-0">Get started for {deposit}, or save up to {fullDiscount} when you pay your tuition in full.</p>
        </Modal.Body>
        <Modal.Footer>
          <small><strong>The following courses also include printed books:</strong> Interior Decorating, Home Staging, Landscape Design, Color Consultant, Floral Design, and Event Decor. Textbooks will automatically be sent to you when you enroll.</small>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const potentialSavings = (currencyCode: string): string => {
  return currencyCode === 'GBP'
    ? '£1298'
    : currencyCode === 'AUD' || currencyCode === 'NZD'
      ? '$1849'
      : '$1698';
};

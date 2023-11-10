'use client';

import { useReducer } from 'react';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';

const backgroundColor = '#f7e1e3';

const potentialSavings = (currencyCode: string): string => {
  return currencyCode === 'GBP'
    ? '£1298'
    : currencyCode === 'AUD' || currencyCode === 'NZD'
      ? '$1849'
      : '$1698';
};

export const DesignBogo2Promo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useReducer(state => !state, false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>BOGO is back for a limited time only!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ready to start your home design career?</p>
          <p>Enroll in any design course and get a second certification course for FREE! This means you could save up to {potentialSavings(priceState?.currency.code ?? 'USD')} on your tuition.</p>
          <p className="mb-1">Get started for {priceState?.currency.code === 'GBP' ? '£40' : '$75'}, or save up to {priceState?.currency.code === 'GBP' ? '£350' : '$400'} when you pay your tuition in full.</p>
        </Modal.Body>
        <Modal.Footer>
          <small><strong>The following courses also include printed books:</strong> Interior Decorating, Home Staging, Landscape Design, Color Consultant, Floral Design, and Event Decor. Textbooks will automatically be sent to you when you enroll.</small>
        </Modal.Footer>
      </Modal>
    </>
  );
};

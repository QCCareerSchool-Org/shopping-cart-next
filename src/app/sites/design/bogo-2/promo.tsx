'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#73725e';

export const DesignBogo2Promo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

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
          <small>Enroll in any design course to receive free design software as well as our brand new Career Essentials Collection filled with business &amp; social media templates!</small>
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

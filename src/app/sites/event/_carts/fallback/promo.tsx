'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Banner } from '@/components/banner';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#b8bab9';

export const EventFallbackPromo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const [ deposit, fullDiscount ] = priceState?.currency.code === 'GBP'
    ? [ '£75', '£150' ]
    : [ '$75', '$300' ];

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Link href="#courses">
          <Hero />
        </Link>
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        You'll Also Receive <strong>50% Off Each Additional Course</strong>
      </Banner>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>Special Offer</Modal.Header>
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

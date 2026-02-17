'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Banner } from '@/components/banner';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#57c3d7';

export const PetFallbackPromo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const [ promoDiscount, getStarted ] = priceState?.currency.code === 'GBP'
    ? [ '£75', '£99' ]
    : [ '$100', '$99' ];

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero />
        </div>
      </Section>
      <Banner onClick={handleClick} badgeImageSrc={null} hideLink>
        You'll Also Receive <strong>50% Off Each Additional Course</strong>
      </Banner>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Get {promoDiscount} off your tuition!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead mb-0">Enroll today and get {promoDiscount} off your tuition! You can get started today for only {getStarted}!</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

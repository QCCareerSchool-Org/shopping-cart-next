'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#2d232b';

export const EventBogo1Promo: FC = () => {
  const priceState = usePriceState();
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const discount = priceState?.currency.code === 'GBP' ? '£100' : '$100';

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
          <p>Ready to Start Your Event Planning Career?</p>
          <p>Enroll in any foundation course and get two specialty courses FREE! Plus save {discount}!</p>
          <h4 className="h6">Learn From Expert Instructors</h4>
          <p>We've hand-selected the top event planning professionals in the industry to guide you through your course material.</p>
          <h4 className="h6">Industry-Recognized Certifications</h4>
          <p>Graduate with three professional event planning certifications and open up a world of career & business opportunities.</p>
          <h4 className="h6">Business Training Included</h4>
          <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified event planner.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

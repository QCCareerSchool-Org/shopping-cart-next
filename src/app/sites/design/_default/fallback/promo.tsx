'use client';

import { useReducer } from 'react';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';

const backgroundColor = '#615849';

export const DesignFallbackPromo: FC = () => {
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
          <Modal.Title>Printed Textbooks Included</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0"><strong>The following courses also include printed books:</strong> Interior Decorating, Home Staging, Landscape Design, Color Consultant, Floral Design, and Event Decor. Textbooks will automatically be sent to you when you enroll.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#66b5dc';

export const PetTraining500OffPromo: FC = () => {
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
          <Modal.Title>Get $500 off your tuition!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>As a Woof Gang Bakery employee, manager or store owner you&apos;re eligible to receive an exclusive $500 discount off your Dog Grooming course tuition. This discount will automatically be applied to the pay in full and installment payment plans.</p>
          <p className="mb-0">No proof of employment with WGB is currently required to enroll.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

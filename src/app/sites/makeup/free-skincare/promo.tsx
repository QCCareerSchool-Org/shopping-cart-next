'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { LuminousKit } from '@/components/luminousKit';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#fff';

export const MakeupFreeSkincarePromo: FC = () => {
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
          <Modal.Title>Limited-Time Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Free Skincare Course</p>
          <p>When you enroll in <strong>Master Makeup Artistry</strong>, you'll get QC's <strong>Skincare course</strong> for free!</p>
          <p className="lead">Free Luminous Collection Makeup Kit</p>
          <p>Get the entire <strong>Luminous Collection</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
          <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
          <LuminousKit />
        </Modal.Body>
      </Modal>
    </>
  );
};
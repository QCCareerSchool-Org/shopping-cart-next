'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { LuminousKit } from '@/components/luminousKit';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#fff';

type Props = {
  date: number;
};

export const MakeupFreeSkincarePromo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  const newImages = date >= Date.UTC(2023, 11, 26, 14, 30); // Dec 26 at 09:30 (14:30 UTC)

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero newImages={newImages} />
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
        <Modal.Footer>
          <p className="small">Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

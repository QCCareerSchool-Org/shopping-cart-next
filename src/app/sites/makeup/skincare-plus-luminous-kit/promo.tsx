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

export const MakeupSkincarePlusLuminousKitPromo: FC<Props> = () => {
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
          <p>When you enroll in <strong>Master Makeup Artistry</strong>, you'll get QC's <strong>Skincare Consultant</strong> course for free!</p>
          <p className="lead">Free Luminous Collection Makeup Kit</p>
          <p>Get the entire <strong>Luminous Collection</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
          <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
          <LuminousKit />
        </Modal.Body>
        <Modal.Footer>
          <p className="small">Kits will be sent after 60 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { MakeupFreeProMakeupWorkshopHero } from './hero';
import { agreementLinks } from '../agreementLinks';
import { LuxeProCollection } from '@/components/luxeProCollection';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  date: number;
}

const backgroundColor = '#fff';

export const MakeupFreeProMakeupWorkshopPromo: FC<Props> = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <MakeupFreeProMakeupWorkshopHero />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <strong>Limited-Time Offer</strong>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Free 3-Part Masterclass</p>
          <p>When you enroll in <strong>Master Makeup Artistry</strong>, you'll get QC's <strong>Pro Makeup Workshop</strong> for free!</p>
          <p className="lead">Free Luxe Pro Brush Collection</p>
          <p>Get the entire <strong>Luxe Pro Brush Collection</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
          <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
          <LuxeProCollection />
        </Modal.Body>
        <Modal.Footer>
          <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

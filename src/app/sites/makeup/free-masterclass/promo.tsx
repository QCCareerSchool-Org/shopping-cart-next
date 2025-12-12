'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { MakeupFreeMasterclassHero } from './hero';
import { agreementLinks } from '../agreementLinks';
import { LuminousKit } from '@/components/luminousKit';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  date: number;
}

const backgroundColor = '#fff';

export const MakeupFreeMasterclassPromo: FC<Props> = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <MakeupFreeMasterclassHero />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <strong>Limited-Time Offer</strong>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Free 3-Part Masterclass</p>
          <p>When you enroll in <strong>Master Makeup Artistry</strong>, you'll get QC's <strong>Pro Makeup Workshop</strong> Free 3-Part Masterclass for free!</p>
          <p className="lead">Free Luminous Collection Makup Kit</p>
          <p>Plus, <strong>get the entire Luminous Makeup Collection</strong> to build your professional makeup kit.</p>
          <p>Don't miss out—<strong>Enroll now</strong> and secure your spot!</p>
          <LuminousKit />
        </Modal.Body>
        <Modal.Footer>
          <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

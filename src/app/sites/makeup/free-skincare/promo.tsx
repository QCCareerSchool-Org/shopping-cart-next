'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { MakeupFreeSkincareHero } from './hero';
import { agreementLinks } from '../agreementLinks';
import { LuminousKit } from '@/components/luminousKit';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#fff';

type Props = {
  date: number;
};

export const MakeupFreeSkincarePromo: FC<Props> = () => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£300' : '$300';

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <MakeupFreeSkincareHero />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Limited-Time Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">{discount} Off and Free Skincare Course</p>
          <p>When you enroll in <strong>Master Makeup Artistry</strong>, you'll get {discount} off and QC's <strong>Skincare Consultant</strong> course for free!</p>
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

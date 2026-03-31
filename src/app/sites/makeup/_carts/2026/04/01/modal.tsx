'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20260401Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton><strong>A makeup career that grows with you!</strong></Modal.Header>
    <Modal.Body>
      <p>This is your moment to invest in your future and get certified. Enroll in <strong>Master Makeup Artistry</strong> and get QC's <strong>Portfolio Development Course FREE</strong>—so you can build your skills, your confidence, and your opportunities.</p>
      <p>This course helps you build a professional makeup portfolio that showcases your skills and attracts new clients. You'll learn to:</p>
      <ul>
        <li>Plan and execute a professional styled shoot</li>
        <li>Capture and edit high-quality photos of your makeup work</li>
        <li>Present and market your portfolio to clients and industry professionals</li>
      </ul>
      <p>Plus, <strong>get the entire Luminous Makeup Collection</strong> to build your professional makeup kit.</p>
      <LuminousKit />
    </Modal.Body>
    <Modal.Footer>
      <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
    </Modal.Footer>
  </Modal>
);

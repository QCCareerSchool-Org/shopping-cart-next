'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20260219Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton><strong>Take Charge of Your Makeup Career</strong></Modal.Header>
    <Modal.Body>
      <p>This is your moment to invest in your future. Enroll in <strong>Master Makeup Artistry</strong> and get QC's <strong>Pro Makeup Workshop FREE</strong>—so you can build your skills, your confidence, and your opportunities.</p>
      <p>This 3-part masterclass led by celebrity makeup artist Nathan Johnson is designed to build on your foundational training and take your career to the next level! You'll learn:</p>
      <ul>
        <li>Glamour Makeup for the Limelight</li>
        <li>Creative Smoky Eye & Pin-Up Looks</li>
        <li>Advanced Bridal Applications</li>
      </ul>
      <p>Plus, <strong>get the entire Luminous Makeup Collection</strong> to build your professional makeup kit.</p>
      <LuminousKit />
    </Modal.Body>
    <Modal.Footer>
      <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
    </Modal.Footer>
  </Modal>
);

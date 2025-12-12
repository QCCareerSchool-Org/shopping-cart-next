'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20250911Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Today and Receive These Bonuses</Modal.Header>
    <Modal.Body>
      <p>Enroll in Master Makeup Artistry and get QC's Pro Makeup Workshop FREE!</p>
      <p>This 3-part masterclass led by celebrity makeup artist Nathan Johnson is designed to build on your foundational training and take your career to the next level! You'll learn:</p>
      <ul>
        <li>Glamour Makeup for the Limelight</li>
        <li>Creative Smoky Eye & Pin-Up Looks</li>
        <li>Advanced Bridal Applications</li>
      </ul>
      <p>Plus, get the <strong>entire Luminous Makeup Collection</strong> to build your professional makeup kit.</p>
      <p>Don't miss out—<strong>Enroll now</strong> and secure your spot!</p>
      <LuminousKit />
    </Modal.Body>
    <Modal.Footer>
      <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
    </Modal.Footer>
  </Modal>
);

'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Makeup20250827Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Today and Receive These Bonuses</Modal.Header>
    <Modal.Body>
      <p>Enroll in Master Makeup Artistry and get QC's Skincare Consultant Course and a bonus lash set FREE!</p>
      <p>This course lets you expand your makeup expertise while opening doors to a new career as a skincare consultant. You'll learn to:</p>
      <ul>
        <li>Assess skin types and conditions</li>
        <li>Conduct personalized skincare consultations and recommend products</li>
        <li>Create DIY skincare recipes and understand anti-aging techniques</li>
      </ul>
      <p>Plus, you'll receive QC's 16-Piece Luxe Pro Brush Collection, expertly designed to help professional makeup artists achieve flawless, polished results for every client.</p>
      <LuminousKit />
    </Modal.Body>
    <Modal.Footer>
      <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
    </Modal.Footer>
  </Modal>
);

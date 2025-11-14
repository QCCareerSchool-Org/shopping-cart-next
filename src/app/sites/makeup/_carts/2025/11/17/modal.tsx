'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Makeup20251117Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton><strong>Don&apos;t Miss Out on these Black Friday Bonuses</strong></Modal.Header>
    <Modal.Body>
      <p>Our Black Friday Offer is here! Enroll in Master Makeup Artistry and get QC&apos;s Skincare Consultant Course FREE!</p>
      <p>This course lets you expand your makeup expertise while opening doors to a new career as a skincare consultant. You&apos;ll learn to:</p>
      <ul>
        <li>Assess skin types and conditions</li>
        <li>Conduct personalized skincare consultations and recommend products</li>
        <li>Create DIY skincare recipes and understand anti-aging techniques</li>
      </ul>
      <p>Plus, get the entire Luminous Makeup Collection to build your professional makeup kit.</p>
      <LuminousKit />
    </Modal.Body>
    <Modal.Footer>
      <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
    </Modal.Footer>
  </Modal>
);

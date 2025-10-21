'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Makeup20251022Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton><strong>Start Today and Receive These Bonuses</strong></Modal.Header>
    <Modal.Body>
      <p>Enroll in Master Makeup Artistry and get QC&apos;s Special FX course FREE!</p>
      <p>This course lets you expand your makeup expertise while opening doors to a new career in film, television, or theatre. You&apos;ll learn to:</p>
      <ul>
        <li>Age characters and transform their features</li>
        <li>Create realistic injuries, scars, and wounds</li>
        <li>Apply prosthetics like hair pieces and special appliances</li>
      </ul>
      <p>Plus, get the entire Luminous Makeup Collection to build your professional makeup kit.</p>
      <LuminousKit />
    </Modal.Body>
    <Modal.Footer>
      <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
    </Modal.Footer>
  </Modal>
);

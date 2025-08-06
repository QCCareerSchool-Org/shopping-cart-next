'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '../../agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const MakeupFallbackModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Special Offer</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Enroll in the Master Makeup Artistry course today and <strong>get the entire Luminous Makeup Collection</strong> to build your professional makeup kit.</p>
      <p>Don't miss out—<strong>Enroll now</strong> and secure your spot!</p>
      <LuminousKit />
    </Modal.Body>
    <Modal.Footer>
      <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
    </Modal.Footer>
  </Modal>
);

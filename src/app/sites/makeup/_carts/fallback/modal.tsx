'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '../../agreementLinks';
import { LuxeProCollection } from '@/components/luxeProCollection';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const MakeupFallbackModal: FC<Props> = props => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Special Offer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Enroll in Master Makeup Artistry and you'll <strong>get the entire Luxe Pro Brush Collection</strong>, filled with makeup and tools.</p>
        <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
        <LuxeProCollection />
      </Modal.Body>
      <Modal.Footer>
        <p className="small">Kits will be sent after 60 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
      </Modal.Footer>
    </Modal>
  );
};

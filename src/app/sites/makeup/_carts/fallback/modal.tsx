'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '../../agreementLinks';
import { LuminousKit } from '@/components/luminousKit';

type Props = {
  newPromo: boolean;
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
        {props.newPromo
          ? <p>Enroll in Master Makeup Artistry and you'll <strong>get the entire Luminous Collection</strong>, filled with makeup and tools.</p>
          : <p>Enroll in Master Makeup Artistry and <strong>get the Pro Makeup Workshop free</strong>. You'll also receive the entire Luminous Collection filled with makeup and tools.</p>
        }
        <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
        <LuminousKit />
      </Modal.Body>
      <Modal.Footer>
        <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
      </Modal.Footer>
    </Modal>
  );
};

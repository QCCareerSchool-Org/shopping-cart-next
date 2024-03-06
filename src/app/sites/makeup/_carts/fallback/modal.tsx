'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';
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
        <p className="small">Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</p>
      </Modal.Footer>
    </Modal>
  );
};

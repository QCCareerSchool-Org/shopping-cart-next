'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const PetStudent20251103Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Pet Care Career</Modal.Header>
    <Modal.Body>
      <p><strong>Get 60% off Dog Training or Dog Behavior!</strong></p>
      <p>Expand your pet career today and save 60% on Dog Training or Dog Behavior. Plus, enjoy 50% off all other courses.</p>
    </Modal.Body>
  </Modal>
);

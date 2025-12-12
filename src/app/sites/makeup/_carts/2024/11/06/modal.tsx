'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { LuminousKit } from '@/components/luminousKit';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20241106Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Early Black Friday Offer</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in <strong>Master Makeup Artistry</strong> and get ANY second course FREE of equal or lesser value. You'll also get the <strong>ENTIRE Luminous Makeup Collection</strong>.</p>
      <LuminousKit />
    </Modal.Body>
  </Modal>
);

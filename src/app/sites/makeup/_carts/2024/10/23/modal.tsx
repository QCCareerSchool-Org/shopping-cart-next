'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { LuminousPlusSFXKit } from '@/components/luminousPlusSFXKit';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20241023Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Makeup Career</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in <strong>Master Makeup Artistry</strong> and get QC's <strong>Special FX Makeup</strong> course FREE. You'll also get the ENTIRE Luminous Makeup Collection and a special FX makeup kit.</p>
      <LuminousPlusSFXKit />
    </Modal.Body>
  </Modal>
);

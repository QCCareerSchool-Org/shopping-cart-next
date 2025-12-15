'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { LuminousKit } from '@/components/luminousKit';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20240321Modal: FC<Props> = props => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Makeup Career</Modal.Header>
      <Modal.Body>
        <p>For a limited time, enroll in Master Makeup Artistry and <strong>get QC's Skincare Course FREE</strong>. You'll also get the ENTIRE Luminous Makeup Collection!</p>
        <LuminousKit />
      </Modal.Body>
    </Modal>
  );
};

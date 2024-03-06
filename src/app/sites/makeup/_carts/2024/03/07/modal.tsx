'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { LuminousKit } from '@/components/luminousKit';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Makeup20240307Modal: FC<Props> = props => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Makeup Career</Modal.Header>
      <Modal.Body>
        <p>Until March 15th, enroll in Master Makeup Artistry and <strong>get QC's Pro Makeup Workshop FREE</strong>. You'll also get the ENTIRE Luminous Makeup Collection!</p>
        <LuminousKit />
      </Modal.Body>
    </Modal>
  );
};

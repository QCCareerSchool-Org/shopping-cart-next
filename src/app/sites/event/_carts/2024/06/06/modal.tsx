'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Event20240606Modal: FC<Props> = props => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Event Planning Career</Modal.Header>
      <Modal.Body>
        <p className="lead mb-0">Enroll in any foundation course and get <strong>TWO specialty courses free</strong>! This is the perfect opportunity to specialize in your event planning training and become a certified expert.</p>
      </Modal.Body>
    </Modal>
  );
};

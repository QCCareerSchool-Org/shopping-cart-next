'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20240507Modal: FC<Props> = props => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Design Career</Modal.Header>
      <Modal.Body>
        <p className="lead mb-0">Enroll in any design course and get a second course free. You&apos;ll also get corresponding course textbooks! This is the perfect opportunity to specialize in your design training and become a certified expert.</p>
      </Modal.Body>
    </Modal>
  );
};

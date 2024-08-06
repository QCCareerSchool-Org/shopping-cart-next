import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const DesignFallbackModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Limited-Time Offer</Modal.Header>
    <Modal.Body>
      <p className="lead mb-0">For a limited time, get the <strong>Color Consultant Course FREE</strong> when you also enroll in any other course of equal or greater value.</p>
    </Modal.Body>
  </Modal>
);

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const DesignFallbackModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Gain Specialized Design Training</Modal.Header>
    <Modal.Body>
      <p className="lead mb-0">For a limited time, enroll in any design course and get Virtual Design FREE!</p>
    </Modal.Body>
  </Modal>
);

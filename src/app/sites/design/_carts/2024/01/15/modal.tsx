import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20240115Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Design Career This New Year</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in any design course and <strong>get a second course free</strong>! This is the perfect opportunity to specialize in your design training and become a certified expert.</p>
    </Modal.Body>
  </Modal>
);

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Design20240124Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Design Career This New Year</Modal.Header>
    <Modal.Body>
      <p>Until January 31st, enroll in any design course and get a second course free. You'll also get $100 off your tuition! This is the perfect opportunity to specialize in your design training and become a certified expert.</p>
    </Modal.Body>
  </Modal>
);

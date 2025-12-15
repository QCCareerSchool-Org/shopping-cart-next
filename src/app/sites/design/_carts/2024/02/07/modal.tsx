import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { CareerEssentials } from '@/components/careerEssentials';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20240207Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Design Career</Modal.Header>
    <Modal.Body>
      <p>Until February 14th, enroll in any design course and get a second course free. This is the perfect opportunity to specialize in your design training and become a certified expert.</p>
      <CareerEssentials />
    </Modal.Body>
  </Modal>
);

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { CareerEssentials } from '@/components/careerEssentials';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20231206Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Course Bonuses Included</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in a design course and get business templates, Design Files software, AND <strong>any second course free</strong>!</p>
      <h2 className="h5">Career Essentials Collection</h2>
      <CareerEssentials />
    </Modal.Body>
  </Modal>
);

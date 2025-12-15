import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { CareerEssentials } from '@/components/careerEssentials';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20231226Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Design Career This Holiday Season</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in a design course and get business templates, Design Files software, AND <strong>any second course free</strong>!</p>
      <h2 className="h5">Career Essentials Collection</h2>
      <CareerEssentials />
    </Modal.Body>
  </Modal>
);

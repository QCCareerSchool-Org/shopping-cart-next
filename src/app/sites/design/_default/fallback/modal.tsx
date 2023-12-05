import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { CareerEssentials } from '@/components/careerEssentials';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const DesignFallbackModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Course Bonuses Included</Modal.Header>
    <Modal.Body>
      <p className="lead">Career Essentials Collection</p>
      <p>Enroll in any design course to receive free design software as well as our brand new Career Essentials Collection filled with business &amp; social media templates!</p>
      <CareerEssentials />
    </Modal.Body>
  </Modal>
);

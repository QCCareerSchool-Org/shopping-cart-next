'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Event20250911Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Event Planning Career</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in any course and get a second course FREE! This is the perfect opportunity to become a certified expert.</p>
      <hr />
      <h6 className="sans-serif">Learn From Expert Instructors</h6>
      <p>We've hand-selected the top event planning professionals in the industry to guide you through your course material.</p>
      <h6 className="sans-serif">Industry-Recognized Certifications</h6>
      <p>Graduate with three professional event planning certifications and open up a world of career & business opportunities.</p>
      <h6 className="sans-serif">Business Training Included</h6>
      <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified event planner.</p>
    </Modal.Body>
  </Modal>
);

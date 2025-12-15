'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Event20251211Modal: FC<Props> = props => {

  return(
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Become a Certified Expert in less than 3 months!</Modal.Header>
      <Modal.Body>
        <p>For a limited time, enroll in any course and get a second course FREE. Become a certified expert with double the training&mdash;at no extra cost.</p>
        <hr />
        <h6 className="sans-serif">Learn From Expert Instructors</h6>
        <p>We&apos;ve hand-selected the top event planning professionals in the industry to guide you through your course material.</p>
        <h6 className="sans-serif">Industry-Recognized Certifications</h6>
        <p>Graduate with professional event planning certifications and open up a world of career & business opportunities.</p>
        <h6 className="sans-serif">Business Training Included</h6>
        <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified event planner.</p>
      </Modal.Body>
    </Modal>
  );
};

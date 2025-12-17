'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Design20251226Modal: FC<Props> = props => {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Take Charge of Your Future in Design</Modal.Header>
      <Modal.Body>
        <p>This is your moment to invest in your future. For a limited time, enroll in any design course and get a second course FREE. Start today and become a certified design expert in under 3 months.</p>
        <hr />
        <h6 className="sans-serif">Learn From Expert Instructors</h6>
        <p>We&apos;ve hand-selected the top home design professionals in the industry to guide you through your course material.</p>
        <h6 className="sans-serif">Industry-Recognized Certifications</h6>
        <p>Graduate with professional design certifications and open up a world of career & business opportunities.</p>
        <h6 className="sans-serif">Business Training Included</h6>
        <p>Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified decorator or designer.</p>
      </Modal.Body>
    </Modal>
  );
};

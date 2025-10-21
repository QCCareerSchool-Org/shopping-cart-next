'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Design20251022Modal: FC<Props> = props => {
  return(

    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Enroll Today & Start Booking Clients in Under 3 Months</Modal.Header>
      <Modal.Body>
        <p>Our Black Friday offer is here early! For a limited time, enroll in any design course and get a second course FREE! This is the perfect opportunity to specialize in your design training and become a certified expert.</p>

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

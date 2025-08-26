'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Design20250827Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Design Career</Modal.Header>
    <Modal.Body>
      <p>For the first time ever, enroll in any design course for $998 or less—save up to $600 when you pay in full.</p>
      <p>Prefer paying over time? Save up to $150 with our monthly installment plan. This is your chance to launch your design career with our biggest savings ever. Act now before this offer is gone!</p>
      {/* <hr />
      <h6 className="sans-serif">Learn From Expert Instructors</h6>
      <p>We've hand-selected the top home design professionals in the industry to guide you through your course material.</p>
      <h6 className="sans-serif">Industry-Recognized Certifications</h6>
      <p>Graduate with professional design certifications and open up a world of career & business opportunities.</p>
      <h6 className="sans-serif">Lifetime Access to Course Content &amp; Updates</h6>
      <p>Enjoy lifetime access to your course materials and updates, keeping you ahead of industry trends long after graduation.</p>
      <h6 className="sans-serif">Exclusive Virtual Community</h6>
      <p>Join a vibrant virtual community where you can access exclusive events, webinars, and interact with fellow students and graduates.</p>
      <h6 className="sans-serif">Business Training Included</h6>
      <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified decorator or designer.</p> */}
    </Modal.Body>
  </Modal>
);

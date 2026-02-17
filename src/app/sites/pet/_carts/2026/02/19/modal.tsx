'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Pet20260219Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Build a Career You'll Love in Pet Care</Modal.Header>
    <Modal.Body>
      <p>This is your moment to invest in your future. For a limited time, you can enroll in any pet care course and get a <strong>second course FREE.</strong></p>
      <hr />
      <h6 className="sans-serif">Learn From Pet Care Mentors</h6>
      <p>We&apos;ve hand-selected the top pet care professionals in the industry to mentor you as you work through your course.</p>
      <h6 className="sans-serif">Industry-Recognized Certifications</h6>
      <p>Graduate with professional pet industry certifications and open up a world of career & business opportunities.</p>
      <h6 className="sans-serif">Business Training Included</h6>
      <p>Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified trainer, groomer or daycare owner.</p>
      <h6 className="sans-serif">Lifetime Access to Course Content & Updates</h6>
      <p>Enjoy lifetime access to your course materials and updates, keeping you ahead of industry trends long after graduation.</p>
      <h6 className="sans-serif">Free First Aid Training</h6>
      <p>As part of QC Pet Studies, you&apos;ll receive FREE Pet First Aid training, which provides essential knowledge to help you respond to common pet emergencies and ensure the safety of your clients&apos; pets.</p>
    </Modal.Body>
  </Modal>
);

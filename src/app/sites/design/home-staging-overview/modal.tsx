'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const STModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Career in Home Staging</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in Home Staging for $998&mdash;that&apos;s a savings of $500 when you pay in full.</p>
      <p>Prefer paying over time? Save up to $150 with our monthly installment plan. This is your chance to launch your design career with our biggest savings ever. Act now before this offer is gone!</p>

      <hr />
      <h6 className="sans-serif">Learn From Expert Instructors</h6>
      <p>We&apos;ve hand-selected top design professionals to guide you through your course material and share real-world expertise.</p>
      <h6 className="sans-serif">Industry-Recognized Certification</h6>
      <p>Earn your professional home staging certification and learn to transform properties into irresistible, market-ready spaces. Launch a career helping homeowners and real estate professionals sell homes faster and for higher value.</p>
      <h6 className="sans-serif">Business Training Included</h6>
      <p className="mb-0">Each course includes built-in business training to help you launch your home staging career, attract clients, and build a thriving business.</p>
    </Modal.Body>
  </Modal>
);

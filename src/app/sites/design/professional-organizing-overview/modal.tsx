'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const POModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Career in Professional Organizing</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in Professional Organizing for $998&mdash;that&apos;s a savings of $250 when you pay in full.</p>
      <p>Prefer paying over time? Save up $150 with our monthly installment plan. This is your chance to launch your design career with our biggest savings ever. Act now before this offer is gone!</p>

      <hr />
      <h6 className="sans-serif">Learn From Expert Instructors</h6>
      <p>We&apos;ve hand-selected top professional organizers to guide you through your course material and share real-world expertise.</p>
      <h6 className="sans-serif">Industry-Recognized Certification</h6>
      <p>Graduate with a professional organizing certification and unlock career opportunities in residential organizing, corporate spaces, downsizing, relocation services, and more.</p>
      <h6 className="sans-serif">Business Training Included</h6>
      <p className="mb-0">Each course includes built-in business training to help you launch your professional organizing career, attract clients, and grow a thriving business.</p>
    </Modal.Body>
  </Modal>
);

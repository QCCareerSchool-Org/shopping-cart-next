'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20250924Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Design Career</Modal.Header>
    <Modal.Body>
      <p>Enroll in any design course for $998 or less&mdash;save up to $550 when you pay in full.</p>
      <p>Prefer paying over time? Save up to $150 with our monthly installment plan. This is your chance to launch your design career with our biggest savings ever. Act now before this offer is gone!</p>
      <p>When you enroll, you'll also receive Virtual Design Training, where you will:</p>
      <ul>
        <li className="mb-3">Expand your business with virtual design services</li>
        <li className="mb-3">Access business training, templates, and expert-led webinars</li>
        <li>Get exclusive discounts with DesignFiles, Placez, SampleBoard & more</li>
      </ul>
      <p>Plus, enjoy 50% off additional courses to expand your expertise.</p>
    </Modal.Body>
  </Modal>
);

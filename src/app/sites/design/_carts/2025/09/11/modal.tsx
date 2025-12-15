'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20250911Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Design Career</Modal.Header>
    <Modal.Body>
      <p>For a limited time, enroll in any design course for $998 or less&mdash;save up to $550 when you pay in full.</p>
      <p>Prefer paying over time? Start for $75, and save up to $150 with our monthly installment plan. This is your chance to launch your design career with our biggest savings ever. Act now before this offer is gone!</p>
      <p>When you enroll, you'll also receive our Career Essentials Kit, which includes:</p>
      <ul>
        <li className="mb-3">Design Software Training—Learn to create professional-quality floor plans and mood boards.</li>
        <li className="mb-3">4 Months of Free DesignFiles—Use top-tier software to design, manage projects, and handle invoicing.</li>
        <li>Canva Templates—Access premium templates for invoices, contracts, and social media to streamline your brand.</li>
      </ul>
      <p>Plus, enjoy 50% off additional courses to expand your expertise.</p>
    </Modal.Body>
  </Modal>
);

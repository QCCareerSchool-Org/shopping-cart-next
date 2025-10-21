'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Design20251007Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Design Career</Modal.Header>
    <Modal.Body>
      <p>Enroll in any course and get the Color Consultant course FREE!</p>
      <hr />
      <p>Expand your expertise with professional training in color theory and application. You&apos;ll learn how to:</p>
      <ul>
        <li className="mb-3">Confidently select palettes that suit any space</li>
        <li className="mb-3">Understand undertones, lighting, and how they affect color choices</li>
        <li>Design cohesive interiors for a variety of clients and budgets</li>
      </ul>
      <p>Plus, enjoy <strong>50% off additional courses</strong> to keep growing your skills and career.</p>
    </Modal.Body>
  </Modal>
);

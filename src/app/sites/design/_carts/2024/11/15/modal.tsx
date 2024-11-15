'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Design20241115Modal: FC<Props> = props => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Black Friday Special</Modal.Header>
      <Modal.Body>
        <p>Enroll in one QC Design School course and get a second course of equal or lesser value FREE! Plus, save an additional $100 on your tuition.</p>
        <h6 className="sans-serif">Pay in Full for Even Bigger Savings</h6>
        <p>When you pay in full, you'll unlock even lower tuition rates, helping you save even more!</p>
        <p><em>Limited time only—don't miss out!</em></p>
        <h6 className="sans-serif">BONUS: Career Catalyst Toolkit Included</h6>
        <p>Everyone who enrolls will also receive our Career Catalyst Toolkit, which includes:</p>
        <ul>
          <li><b>Personalized Video Call:</b> One-on-one mentorship with an industry expert</li>
          <li><b>4 Months of FREE Access to Design Files:</b> Hands-on experience with essential design tools</li>
          <li><b>Exclusive Canva Templates:</b> Ready-to-use business templates to streamline your work</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

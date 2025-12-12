'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Wellness20250820Modal: FC<Props> = props => {
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£300' : '$300';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Sleep Consulting Career</Modal.Header>
      <Modal.Body>
        <p>For a limited time, enroll in Sleep Consulting and get {discount} off your tuition!</p>
        <hr />
        <h6 className="sans-serif">Learn From an Expert Instructor</h6>
        <p>We've hand-selected the top sleep consultant in the industry to guide you through your course material.</p>
        <h6 className="sans-serif">Flexible Online Training</h6>
        <p>QC provides a fully online education—learn at your own pace and engage with fellow students and grads in our virtual community!</p>
        <h6 className="sans-serif">Industry-Recognized Certification</h6>
        <p className="mb-0">Graduate with a Pediatric Sleep Consulting Professional (PSCP™) certificate and open up a world of career & business opportunities.</p>
      </Modal.Body>
    </Modal>
  );
};

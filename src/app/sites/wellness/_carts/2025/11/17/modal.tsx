'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Wellness20251117Modal: FC<Props> = props => {
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£400' : '$400';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Become a Certified Sleep Consultant with Our Black Friday Deal</Modal.Header>
      <Modal.Body>
        <p>Don&apos;t miss out on a chance to boost your career this Black Friday. For a limited time, you can enroll in our Pediatric Sleep Consulting course and save {discount} on tuition, or save even more when you pay in full.</p>
        <hr />
        <h6 className="sans-serif">Learn From An Expert Instructor</h6>
        <p>We&apos;ve hand-selected the top sleep consultant in the industry to guide you through your course material.</p>
        <h6 className="sans-serif">Flexible Online Training</h6>
        <p>QC provides a fully online education&mdash;learn at your own pace and engage with fellow students and grads in our virtual community!</p>
        <h6 className="sans-serif">Industry-Recognized Certification</h6>
        <p className="mb-0">Graduate with a Pediatric Sleep Consulting Professional (PSCP™) certificate and open up a world of career & business opportunities.</p>
      </Modal.Body>
    </Modal>
  );
};

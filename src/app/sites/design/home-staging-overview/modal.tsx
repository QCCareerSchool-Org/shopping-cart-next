'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const STModal: FC<Props> = props => {
  const priceState = usePriceState();
  const isGBP = priceState?.currency?.code === 'GBP';
  const [ fullDiscount, discount ] = isGBP
    ? [ '£350', '£100' ]
    : [ '$350', '$100' ];
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Launch Your Staging Career with a Respected Certification</Modal.Header>
      <Modal.Body>
        <p>For a limited time, enroll in Home Staging and save {discount} on your tuition&mdash;or save {fullDiscount} when you pay in full!</p>

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
};

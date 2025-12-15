'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const FDModal: FC<Props> = props => {
  const priceState = usePriceState();
  const isGBP = priceState?.currency?.code === 'GBP';
  const [ fullDiscount, discount ] = isGBP
    ? [ '£500', '£100' ]
    : [ '$500', '$100' ];
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Turn Your Passion for Florals into a Profession in Under 1 Year</Modal.Header>
      <Modal.Body>
        <p>For a limited time, you can enroll in Floral Design and save {discount} on your tuition&mdash;or save {fullDiscount} when you pay in full!</p>

        <hr />
        <h6 className="sans-serif">Learn From Expert Instructors</h6>
        <p>We&apos;ve hand-selected top floral design professionals to guide you through your course material and share real-world expertise.</p>
        <h6 className="sans-serif">Industry-Recognized Certification</h6>
        <p>Graduate with a professional floral design certification and unlock career opportunities in weddings, events, retail floral shops, freelancing, and more.</p>
        <h6 className="sans-serif">Business Training Included</h6>
        <p className="mb-0">Each course includes built-in business training to help you launch your floral design career, attract clients, and grow a thriving business.</p>
      </Modal.Body>
    </Modal>
  );
};

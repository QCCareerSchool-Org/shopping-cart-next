'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Pet20240724Modal: FC<Props> = props => {
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£300' : '$300';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Pet Care Career</Modal.Header>
      <Modal.Body>
        <p className="lead">Enroll in any pet course and get {discount} off your tuition! Choose from in-demand professions like grooming, training, or dog daycare services.</p>
        <h6>Learn From Expert Instructors</h6>
        <p>We've hand-selected the top pet care professionals in the industry to guide you through your course material.</p>
        <h6>Industry-Recognized Certifications</h6>
        <p>Graduate with professional pet industry certifications and open up a world of career & business opportunities.</p>
        <h6>Business Training Included</h6>
        <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified trainer, groomer or daycare owner</p>
      </Modal.Body>
    </Modal>
  );
};

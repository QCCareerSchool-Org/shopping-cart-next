'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Event20251129Modal: FC<Props> = props => {
  const priceState = usePriceState();
  const cyberMondayValue = priceState?.currency.code === 'GBP' ? '£778' : '$2037';
  const discount = priceState?.currency.code === 'GBP' ? '£100' : '$100';

  return(
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Become a Certified Expert with Our Cyber Week Offer&mdash;Valued Up to {cyberMondayValue}</Modal.Header>
      <Modal.Body>
        <p>Our Cyber Week Offer is here! For a limited time, enroll in any foundation course and get 2 FREE specialty courses, PLUS an extra {discount} off tuition!</p>
        <p className="lead">Enroll Today & Start Your Event Planning Career in 3 Months or Less</p>
        <hr />
        <h6 className="sans-serif">Learn From Expert Instructors</h6>
        <p>We&apos;ve hand-selected the top event planning professionals in the industry to guide you through your course material.</p>
        <h6 className="sans-serif">Industry-Recognized Certifications</h6>
        <p>Graduate with professional event planning certifications and open up a world of career & business opportunities.</p>
        <h6 className="sans-serif">Business Training Included</h6>
        <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified event planner.</p>
      </Modal.Body>
    </Modal>
  );
};

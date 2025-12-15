'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20251117Modal: FC<Props> = props => {
  const priceState = usePriceState();
  const blackFridayValue = priceState?.currency.code === 'GBP' ? '£1098' : '$1648';
  const discount = priceState?.currency.code === 'GBP' ? '£100' : '$100';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Enroll Today with Our Black Friday Offer&mdash;Valued Up to {blackFridayValue}!</Modal.Header>
      <Modal.Body>
        <p>Our Black Friday Offer is here! For a limited time, enroll in any design course and get a second course FREE plus {discount} off tuition! Enroll today and become a certified expert in under 3 months.</p>
        <hr />
        <h6 className="sans-serif">Learn From Expert Instructors</h6>
        <p>We&apos;ve hand-selected the top home design professionals in the industry to guide you through your course material.</p>
        <h6 className="sans-serif">Industry-Recognized Certifications</h6>
        <p>Graduate with professional design certifications and open up a world of career & business opportunities.</p>
        <h6 className="sans-serif">Business Training Included</h6>
        <p>Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified decorator or designer.</p>
      </Modal.Body>
    </Modal>
  );
};

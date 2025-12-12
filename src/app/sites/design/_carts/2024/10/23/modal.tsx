'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20241023Modal: FC<Props> = props => {
  const priceState = usePriceState();
  const deposit = priceState?.currency.code === 'GBP' ? '£75' : '$75';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Design Career</Modal.Header>
      <Modal.Body>
        <p>For a limited time, enroll in any design course and <strong>get a second course FREE!</strong> Plus, enjoy 4 months free with Design Files, an innovative platform for managing your design projects and collaborating with clients. Start your journey toward becoming a certified expert with just a {deposit} deposit. Don't miss this amazing offer!</p>
        <hr />
        <h6 className="sans-serif">Learn From Expert Instructors</h6>
        <p>We've hand-selected the top home design professionals in the industry to guide you through your course material.</p>
        <h6 className="sans-serif">Industry-Recognized Certifications</h6>
        <p>Graduate with professional design certifications and open up a world of career & business opportunities.</p>
        <h6 className="sans-serif">Lifetime Access to Course Content &amp; Updates</h6>
        <p>Enjoy lifetime access to your course materials and updates, keeping you ahead of industry trends long after graduation.</p>
        <h6 className="sans-serif">Exclusive Virtual Community</h6>
        <p>Join a vibrant virtual community where you can access exclusive events, webinars, and interact with fellow students and graduates.</p>
        <h6 className="sans-serif">Business Training Included</h6>
        <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified decorator or designer.</p>
      </Modal.Body>
    </Modal>
  );
};

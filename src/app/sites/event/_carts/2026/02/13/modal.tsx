'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Event20260213Modal: FC<Props> = props => {
  const priceState = usePriceState();
  const discount = priceState?.currency.code === 'GBP' ? '£100' : '$100';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Build a Career You'll Love in Event Planning</Modal.Header>
      <Modal.Body>
        <p>A new year means new opportunities—and now's your moment to act. For a limited time, enroll in any foundation course and get <strong>2 FREE specialty courses PLUS {discount} OFF tuition.</strong></p>
        <hr />
        <h6 className="sans-serif">Enroll Today & Start Building Your Event Career in 3 Months or Less</h6>
        <p>Turn your creativity and organization skills into a career you own&mdash;faster than you think.</p>
        <hr />
        <h6 className="sans-serif">Learn From Real Event Industry Experts</h6>
        <p>You'll be guided by experienced event planning professionals who know what it takes to build a successful career and business in the real world.</p>
        <h6 className="sans-serif">Graduate With Industry-Recognized Certifications</h6>
        <p>Earn respected event planning certifications that give you the credibility to book clients, grow your business, and create opportunities on your terms.</p>
        <h6 className="sans-serif">Business Training Built In</h6>
        <p className="mb-0">Every course includes practical business training to help you confidently launch, market, and grow your services as a certified event planner.</p>
      </Modal.Body>
    </Modal>
  );
};

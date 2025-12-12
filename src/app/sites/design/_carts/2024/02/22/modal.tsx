'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20240222Modal: FC<Props> = props => {
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£100' : '$100';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Design Career</Modal.Header>
      <Modal.Body>
        <p className="lead mb-0">Until the end of February, enroll in any design course and get a <strong>second course free</strong>. You'll also get {discount} off your tuition! This is the perfect opportunity to specialize in your design training and become a certified expert.</p>
      </Modal.Body>
    </Modal>
  );
};

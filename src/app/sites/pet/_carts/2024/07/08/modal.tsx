'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Pet20240708Modal: FC<Props> = props => {
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£150' : '$200';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Pet Care Career</Modal.Header>
      <Modal.Body>
        <p className="lead mb-0">Enroll in any pet course and get {discount} off your tuition!</p>
      </Modal.Body>
    </Modal>
  );
};

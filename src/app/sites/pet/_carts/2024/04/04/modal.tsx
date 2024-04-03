'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Pet20240404Modal: FC<Props> = props => {
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£150' : '$200';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Pet Care Career</Modal.Header>
      <Modal.Body>
        <p className="lead mb-0">For a limited time, enroll in any pet course and get {discount} off your tuition! Choose from in-demand professions like grooming, training, or dog daycare services.</p>
      </Modal.Body>
    </Modal>
  );
};

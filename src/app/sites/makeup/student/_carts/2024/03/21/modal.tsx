'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const MakeupStudent20240321Modal: FC<Props> = props => {
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£50' : '$50';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Invest in Your Makeup Career</Modal.Header>
      <Modal.Body>
        <p className="lead mb-0">For a limited time, enroll in any new course and get an extra {discount} off plus a <strong>Sonia Kashuk brush set!</strong></p>
      </Modal.Body>
    </Modal>
  );
};

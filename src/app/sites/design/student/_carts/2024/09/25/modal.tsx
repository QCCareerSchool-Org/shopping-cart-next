'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const DesignStudent20240925Modal: FC<Props> = props => {
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£50' : '$50';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Invest in Your Design Career</Modal.Header>
      <Modal.Body>
        <p className="lead mb-0">For a limited time, enroll in any new course and get an extra {discount} off plus a <strong>free Sherwin Williams color fan deck!</strong></p>
      </Modal.Body>
    </Modal>
  );
};

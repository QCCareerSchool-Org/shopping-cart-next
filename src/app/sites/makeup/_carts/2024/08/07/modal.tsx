'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { LuminousKit } from '@/components/luminousKit';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Makeup20240807Modal: FC<Props> = props => {
  const priceState = usePriceState();
  const discount = priceState?.currency.code === 'GBP' ? '£300' : '$300';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Makeup Career</Modal.Header>
      <Modal.Body>
        <p>For a limited time, enroll in Master Makeup Artistry and get {discount} off your tuition.</p>
        <p>You'll also get the ENTIRE Luminous Makeup Collection loaded with professional makeup and tools to help you launch your new beauty career!</p>
        <LuminousKit />
      </Modal.Body>
    </Modal>
  );
};

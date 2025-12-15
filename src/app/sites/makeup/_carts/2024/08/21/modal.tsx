'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { LuminousKit } from '@/components/luminousKit';
import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20240821Modal: FC<Props> = props => {
  const priceState = usePriceState();
  const discount = priceState?.currency.code === 'GBP' ? '£300' : '$300';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Makeup Career</Modal.Header>
      <Modal.Body>
        <p>For a limited time, enroll in <strong>Master Makeup Artistry</strong> and <strong>get {discount} off your tuition</strong> plus QC's Skincare Course FREE. You'll also get the ENTIRE Luminous Makeup Collection!</p>
        <LuminousKit />
      </Modal.Body>
    </Modal>
  );
};

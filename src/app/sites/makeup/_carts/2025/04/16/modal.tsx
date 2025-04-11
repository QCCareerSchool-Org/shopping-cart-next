'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKit } from '@/components/luminousKit';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Makeup20250416Modal: FC<Props> = props => {
  const priceState = usePriceState();
  const discount = priceState?.currency.code === 'GBP' ? '£100' : '$100';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Makeup Career</Modal.Header>
      <Modal.Body>
        <p>For a limited time, enroll in <strong>Master Makeup Artistry</strong> and get the <strong>Skincare</strong> course FREE plus save an extra {discount} on your tuition.</p>
        <p>You'll also get the ENTIRE Luminous Makeup Collection:</p>
        <LuminousKit />
      </Modal.Body>
      <Modal.Footer>
        <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
      </Modal.Footer>
    </Modal>
  );
};

'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { agreementLinks } from '../../agreementLinks';
import { LuxeProCollection } from '@/components/luxeProCollection';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const MakeupFallbackModal: FC<Props> = props => {
  const priceState = usePriceState();
  const discount = priceState?.currency.code === 'GBP' ? '£100' : '$100';

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Special Offer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Enroll today and save {discount} on your tuition!</strong> Plus, when you enroll in Master Makeup Artistry, you'll receive the entire Luxe Pro Brush Collection for free!</p>
        <LuxeProCollection />
      </Modal.Body>
      <Modal.Footer>
        <p className="small">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
      </Modal.Footer>
    </Modal>
  );
};

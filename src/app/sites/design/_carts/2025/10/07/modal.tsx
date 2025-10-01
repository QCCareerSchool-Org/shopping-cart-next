'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Design20251007Modal: FC<Props> = props => {
  const priceState = usePriceState();
  const discount998 = priceState?.currency.code === 'GBP' ? '£998' : '$998';
  const discount550 = priceState?.currency.code === 'GBP' ? '£550' : '$550';
  const discount150 = priceState?.currency.code === 'GBP' ? '£150' : '$150';

  return(

    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Start Your Design Career</Modal.Header>
      <Modal.Body>
        <p>Enroll in any design course for {discount998} or less&mdash;save up to {discount550} when you pay in full.</p>
        <p>Prefer paying over time? Save up to {discount150} with our monthly installment plan. This is your chance to launch your design career with our biggest savings ever. Act now before this offer is gone!</p>

        <hr />
        <h6 className="sans-serif text-center mb-3">When you enroll, you&apos;ll also receive our Color Consultant course FREE!</h6>
        <p>Expand your expertise with professional training in color theory and application. You&apos;ll learn how to:</p>
        <ul>
          <li className="mb-3">Confidently select palettes that suit any space</li>
          <li className="mb-3">Understand undertones, lighting, and how they affect color choices</li>
          <li>Design cohesive interiors for a variety of clients and budgets</li>
        </ul>
        <p>Plus, enjoy <strong>50% off additional courses</strong> to keep growing your skills and career.</p>
      </Modal.Body>
    </Modal>
  );
};

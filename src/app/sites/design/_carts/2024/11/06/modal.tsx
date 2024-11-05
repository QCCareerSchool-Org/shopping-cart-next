'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Design20241106Modal: FC<Props> = props => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>Early Black Friday Offer</Modal.Header>
      <Modal.Body>
        <p>For a limited time, enroll in any design course and get a second course FREE! Plus you'll receive these Early Black Friday bonuses:</p>
        <h6 className="sans-serif">Personalized Video Call with an Industry Expert</h6>
        <p>After graduation, you'll get a one-on-one video call with an industry expert. Use this time to receive tailored career advice, build your business plan, get resume feedback, discuss next steps, and more!</p>
        <p>Your call  includes:</p>
        <ul>
          <li>One-on-one mentorship</li>
          <li>Strategy Development</li>
          <li>Actionable Insights</li>
        </ul>
        <h6 className="sans-serif">4 Months of FREE Access to Design Files</h6>
        <p>Gain practical experience with design software that's widely used in the industry.</p>
        <p>Design Files Includes:</p>
        <ul>
          <li>Advanced floor planning</li>
          <li>Project management</li>
          <li>Integrated invoicing</li>
          <li>Client presentations and much more!</li>
        </ul>
        <h6 className="sans-serif">Exclusive Canva Template Collection</h6>
        <p>Give your business a boost and save yourself time with customizable business templates.</p>
        <p>Your templates Include:</p>
        <ul className="mb-0">
          <li>Branded Invoices</li>
          <li>Social Media Graphics</li>
          <li>Customized Contracts</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

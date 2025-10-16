import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const DesignFallbackModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Start Your Design Career in Months!</Modal.Header>
    <Modal.Body>
      <p>Enroll in any design course today, and receive our Color Consultant course FREE!</p>
      <p>Expand your expertise and advance your career with professional training in color theory and application. You&apos;ll learn how to:</p>
      <ul>
        <li className="mb-2">Confidently select palettes that suit any space</li>
        <li className="mb-2">Understand undertones, lighting, and how they affect color choices</li>
        <li>Design cohesive interiors for a variety of clients and budgets</li>
      </ul>
      <p>Plus, enjoy <strong>50% off additional courses</strong> to keep growing your skills and career.</p>
    </Modal.Body>
  </Modal>
);

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const EventStudent20240124Modal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>Invest in Your Career This Holiday Season</Modal.Header>
    <Modal.Body>
      <p className="mb-0">Until January 31st, enroll in any new course and get an extra $50 off plus a leather portfolio!</p>
    </Modal.Body>
  </Modal>
);

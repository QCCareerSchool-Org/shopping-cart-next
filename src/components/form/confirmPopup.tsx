import type { FC } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';

type Props = {
  show: boolean;
  onCancel: () => void;
  onProceed: () => void;
  body: FC;
  heading?: string;
};

export const ConfirmPopup: FC<Props> = props => {
  return (
    <Modal show={props.show} onHide={props.onCancel}>
      <ModalHeader>{props.heading ?? 'Confirmation'}</ModalHeader>
      <ModalBody>
        <props.body />
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.onProceed}>Proceed Anyway</button>
        <button className="btn btn-success" onClick={props.onCancel}>Let Me Go Back</button>
      </ModalFooter>
    </Modal>
  );
};

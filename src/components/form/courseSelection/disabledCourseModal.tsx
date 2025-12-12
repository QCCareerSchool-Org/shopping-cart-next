import type { FC, JSX } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

type Props = {
  course: string;
  name: string;
  message: string | JSX.Element;
  show: boolean;
  onHide: () => void;
};

/**
 * A popup that explains why a particular course selection is disabled
 */
export const DisabledCourseModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <ModalHeader closeButton><strong>Why Can't I Take {props.name}?</strong></ModalHeader>
    <ModalBody>{props.message}</ModalBody>
  </Modal>
);

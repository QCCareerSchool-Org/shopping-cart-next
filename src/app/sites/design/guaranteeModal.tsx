import type { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const GuaranteeModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <ModalHeader closeButton><strong>21-Day Money-Back Guarantee</strong></ModalHeader>
    <ModalBody>
      <p>We stand behind our quality courses. That's why we offer a full money-back guarantee. From the date you enroll, you have 21 days to review the course materials.</p>
      <p className="mb-0">If you do not find that a course is a good fit for you, simply return the materials, unused, with a tracking number, and your course fees will be immediately refunded. All that we ask is that you call the School to receive shipping instructions.</p>
    </ModalBody>
  </Modal>
);

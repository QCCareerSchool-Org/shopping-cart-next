import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

import TwentyOneDays from '@/app/21-day.svg';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const GuaranteeModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <ModalHeader closeButton><h5 className="mb-0">21-Day Money-Back Guarantee</h5></ModalHeader>
    <ModalBody>
      <div className="row">
        <div className="col-4 d-none d-sm-block">
          <Image src={TwentyOneDays as StaticImageData} className="img-fluid w-100" alt="21-Day Money-Back Guarantee" />
        </div>
        <div className="col-12 col-sm-8">
          <p>We stand behind our quality courses. That&apos;s why we offer a full money-back guarantee. From the date you enroll, you have 21 days to review the course materials.</p>
          <p>If you do not find that the course is a good fit for you, simply return the materials, unused, with a tracking number, and your course fees will be immediately refunded. All that we ask is that you call the School to receive shipping instructions.</p>
          <p>Please note that both the SFX Starter Makeup Kit (value $100 US) and the Airbrush Starter Kit (value $100 US) can not be refunded.</p>
        </div>
      </div>
    </ModalBody>
  </Modal>
);

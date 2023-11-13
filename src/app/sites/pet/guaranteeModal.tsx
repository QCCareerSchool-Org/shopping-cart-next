import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

import OneYear from './pet-guarantee-1-year.svg';
import TwentyOneDays from './pet-guarantee-21-days.svg';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const GuaranteeModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide} size="lg">
    <ModalHeader closeButton><strong>21-Day Money-Back Guarantee</strong></ModalHeader>
    <ModalBody>
      <div className="row">
        <div className="col-12 col-lg-4 d-none d-sm-block text-center">
          <Image src={TwentyOneDays as StaticImageData} className="img-fluid w-100" alt="21-Day Money-Back Guarantee" />
        </div>
        <div className="col-12 col-lg-8 text-start text-sm-center text-md-start">
          <h3>The 21-Day Money-Back Guarantee</h3>
          <p>You have 21 days to review your materials from the date of enrollment. If during this time you decide that becoming a dog groomer isn't the right fit for you, you'll receive a full refund. Simply return the materials (using a shipping method that provides a tracking number) and your course fees will be immediately refunded. All we ask is that you call us to receive shipping instructions for the return. Please note that all materials must be returned unused and in their original condition in order to get a full refund. For example, the set of clippers and attachment combs cannot be refunded if their seal has been broken (value $200 US).</p>
        </div>
        <div className="col-12 col-lg-4 d-none d-sm-block text-center">
          <Image src={OneYear as StaticImageData} className="img-fluid w-100" alt="1-Year Money-Back Guarantee" />
        </div>
        <div className="col-12 col-lg-8 text-start text-sm-center text-md-start">
          <h3>1-Year Money-Back Guarantee</h3>
          <p>After you've graduated from QC Pet Studies, you'll have all the knowledge and skills you need to be a successful dog grooming professional.</p>
          <p>If you have not earned the equivalent of your full tuition in dog grooming fees&mdash;either by freelancing or working for an established grooming company&mdash;within the first year after graduation, you'll receive a full refund of your tuition.</p>
          <p>Simply contact the school and provide us with evidence that you have made a reasonable effort to sell your services or to get a job in the grooming industry, as outlined in your business training materials and online student center. For business owners/freelancers, this would include a website, and copies of marketing materials used to advertise your services. For job seekers, this would include copies of your resume(s), cover letter(s), and job applications.</p>
          <p>For more information, please contact the school via phone, email or Live Chat.</p>
        </div>
      </div>
    </ModalBody>
  </Modal>
);

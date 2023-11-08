import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import { FaLock } from 'react-icons/fa';
import { Agreement } from './agreement';
import { Details } from './details';
import { Disclaimers } from './disclaimers';
import MasterCardLogo from './mastercard.svg';
import { NoCoursesMessage } from './noCoursesMessage';
import { Notes } from './notes';
import TrustedLogo from './trusted-site-seal.png';
import VisaLogo from './visa.svg';
import { Section } from '@/components/section';
import type { AgreementLinks } from '@/domain/agreementLinks';

type Props = {
  showPromoCodeInput: boolean;
  agreementLinks: AgreementLinks;
  guarantee: FC | null;
  onSubmit: () => void;
};

export const Summary: FC<Props> = props => {
  return (
    <Section className="summarySection">
      <h2 className="h1">Complete Your Enrollment</h2>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8 mb-4 mb-md-0">
          <Notes />
          <Details />
          <Agreement agreementLinks={props.agreementLinks} />
          <div className="text-center text-sm-start">
            <div className="mb-4">
              <button onClick={props.onSubmit} className="btn btn-primary"><FaLock style={{ position: 'relative', top: -1 }} /> Proceed to Payment</button>
            </div>
            <NoCoursesMessage />
            <Image src={VisaLogo as StaticImageData} className="me-2" style={{ height: 32 }} alt="Visa" />
            <Image src={MasterCardLogo as StaticImageData} className="me-2" style={{ height: 32 }} alt="Mastercard" />
            <Image src={TrustedLogo} alt="Trusted Site Seal" />
          </div>
          <Disclaimers showPromoCodeInput={props.showPromoCodeInput} />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          {props.guarantee && <props.guarantee />}
        </div>
      </div>
    </Section>
  );
};

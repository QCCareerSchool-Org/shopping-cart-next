import Image from 'next/image';
import { type FC, useEffect, useRef } from 'react';

import { Agreement } from './agreement';
import { Details } from './details';
import { Disclaimers } from './disclaimers';
import MasterCardLogo from './mastercard.svg';
import { NoCoursesMessage } from './noCoursesMessage';
import { Notes } from './notes';
import RightArrowIcon from './right-arrow-alt.svg';
import TrustedLogo from './trusted-site-seal.png';
import VisaLogo from './visa.svg';
import { Section } from '@/components/section';
import type { AgreementLinks } from '@/domain/agreementLinks';
import type { CourseGroup } from '@/domain/courseGroup';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Props {
  showPromoCodeInput: boolean;
  agreementLinks: AgreementLinks;
  guarantee: FC | null;
  onSubmit: () => void;
  courseGroups: CourseGroup[];
  onButtonVisibilityChange?: (visible: boolean) => void;
}

export const Summary: FC<Props> = props => {
  const { onButtonVisibilityChange } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonVisible = useIntersectionObserver(buttonRef, { threshold: 1 });

  useEffect(() => {
    onButtonVisibilityChange?.(buttonVisible);
  }, [ onButtonVisibilityChange, buttonVisible ]);

  return (
    <Section className="summarySection">
      <h2 className="h1">Complete Your Enrollment</h2>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8 mb-4 mb-md-0">
          <Notes />
          <Details courseGroups={props.courseGroups} />
          <Agreement agreementLinks={props.agreementLinks} />
          <div className="text-center text-sm-start">
            <div className="mb-4">
              <button ref={buttonRef} onClick={props.onSubmit} className="btn btn-primary">Proceed to Payment<Image src={RightArrowIcon} alt="🡒" /></button>
            </div>
            <NoCoursesMessage />
            <Image src={VisaLogo} className="me-2" style={{ height: 32 }} alt="Visa" />
            <Image src={MasterCardLogo} className="me-2" style={{ height: 32 }} alt="Mastercard" />
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

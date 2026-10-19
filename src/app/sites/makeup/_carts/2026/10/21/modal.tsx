'use client';

import type { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKitWithoutConcealer } from '@/components/luminousKitWithoutConcealer';
import { PromoModal } from '@/components/promoModal';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesDispatch } from '@/hooks/useCoursesDispatch';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20261021Modal: FC<Props> = props => {
  const coursesDispatch = useCoursesDispatch();
  const { countryCode, provinceCode } = useAddressState();
  const handleClick = () => {
    coursesDispatch({ type: 'CLEAR_COURSES', payload: { countryCode, provinceCode } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'mz' } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'sf' } });
    props.onHide();
  };

  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      onPrimaryClick={handleClick}
      heading={<Makeup20261021ModalHeading />}
      left={<Makeup20261021ModalLeft />}
      right={<Makeup20261021ModalRight />}
      headerAside={<Makeup20261021ModalOffer />}
      footerMessage={<>Start your journey today for only <span className="text-primary">$49</span>.</>}
    />
  );
};

const Makeup20261021ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>A Makeup Career that Grows With You</h2>
    <p className="mb-0">Enroll in Master <strong>Makeup Artistry</strong> today and get both the <strong>Special FX Makeup course</strong> and <strong>Pro Makeup Workshop</strong> FREE.</p>
  </div>
);

const Makeup20261021ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>50% OFF</div>
    <div className="small fw-bold text-uppercase">Additional Certifications</div>
  </div>
);

const Makeup20261021ModalLeft: FC = () => (
  <>
    <div>
      <h3 className="h4 mb-3">Get Two Professional Courses FREE</h3>
      <p>Unlock your full potential with this powerful combination. Build a foundation in professional makeup artistry while expanding your services into personalized skincare consultations and creative special effects for film, television, and beyond.</p>
      <p className="lead">With three courses, you'll learn to:</p>
      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
        {features.map((feature, i) => (
          <li key={i} className="d-flex gap-3">
            <div className="flex-shrink-0 d-flex align-items-center justify-content-center">
              <FaCheckCircle className="text-primary" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </>
);

const Makeup20261021ModalRight: FC = () => (
  <div>
    <h3 className="h4 mb-3">Your Luminous Makeup Kit Includes:</h3>
    <div className="bg-white border rounded-4 p-4 shadow-sm">
      <LuminousKitWithoutConcealer />
      <p className="small text-secondary mb-0 mt-3">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
    </div>
  </div>
);

const features = [
  <><strong>Master Professional Makeup:</strong> Build your skills in color theory, blending, contouring, and makeup application for everything from everyday beauty to bridal looks.</>,
  <><strong>Create Special FX Looks:</strong> Learn to create realistic wounds, bruises, scars, and other dramatic effects for film, television, Halloween, and creative projects.</>,
  <><strong>Transform Characters:</strong> Use special effects techniques to create realistic injuries, dramatic transformations, and imaginative looks.</>,
  <><strong>Become a Skincare Expert:</strong> Assess different skin types and concerns, including acne, sensitivity, and signs of aging, to recommend personalized skincare routines and products.</>,
  <><strong>Expand Your Services:</strong> Combine professional makeup, special effects, and skincare consultations to attract more clients and explore new career opportunities.</>,
];

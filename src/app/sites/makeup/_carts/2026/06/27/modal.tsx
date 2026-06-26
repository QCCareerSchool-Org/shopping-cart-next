'use client';

import type { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKitWithoutConcealer } from '@/components/luminousKitWithoutConcealer';
import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesDispatch } from '@/hooks/useCoursesDispatch';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20260627Modal: FC<Props> = props => {
  const coursesDispatch = useCoursesDispatch();
  const { countryCode, provinceCode } = useAddressState();
  const handleClick = () => {
    coursesDispatch({ type: 'CLEAR_COURSES', payload: { countryCode, provinceCode } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'mz' } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'sk' } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'mw' } });
    props.onHide();
  };

  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      onPrimaryClick={handleClick}
      heading={<Makeup20260627ModalHeading />}
      left={<Makeup20260627ModalLeft />}
      right={<Makeup20260627ModalRight />}
      headerAside={<Makeup20260627ModalOffer />}
      footerMessage={<>Start your journey today for only <span className="text-primary">$49</span>.</>}
    />
  );
};

const Makeup20260627ModalHeading: FC = () => {
  const { countryCode } = useAddressState();
  return (
    <div className="position-relative z-1 flex-grow-1">
      <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>
        {countryCode === 'CA'
          ? 'Celebrate with our Canada Day Special!'
          : countryCode === 'US'
            ? 'Celebrate with our 4th of July Special!'
            : 'Unlock Your Event Planning Career.'}
      </h2>
      <p className="text-secondary mb-0">Enroll in any design course and get a <strong>second course FREE, plus enjoy an extra $100 OFF tuition.</strong></p>
    </div>
  );
};

const Makeup20260627ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>50% OFF</div>
    <div className="small fw-bold text-uppercase">Additional Certifications</div>
  </div>
);

const Makeup20260627ModalLeft: FC = () => (
  <>
    <div>
      <h3 className="h4 mb-3">Get Two Professional Courses FREE</h3>
      <p>Unlock your full potential with this powerhouse combination. Build a foundation in professional makeup artistry while adding high-ticket skincare services and advanced artistry to your menu.</p>
      <p className="fw-bold">Transform your career and learn to:</p>
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
    <PromoModalDarkBlueBox>
      <h4 className="fw-bold sans-serif fs-4 mb-2 d-flex align-items-center gap-2">
        <span className="bg-primary small px-2 py-1 rounded text-uppercase fw-bold" style={{ color: '#0A0F3D', fontSize: '0.75rem' }}>Plus</span>
        Luminous Makeup Collection
      </h4>
      <p className="small mb-0">Get the entire Luminous Makeup Collection to build your professional makeup kit.</p>
    </PromoModalDarkBlueBox>
  </>
);

const Makeup20260627ModalRight: FC = () => (
  <div className="bg-white border rounded-4 p-4 shadow-sm">
    <LuminousKitWithoutConcealer />
    <p className="small text-secondary mb-0 mt-3">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
  </div>
);

const features = [
  <><strong>Build Your Foundation:</strong> Master expert makeup application, color theory, and advanced blending for a flawless, long-wear finish.</>,
  <><strong>Master Advanced Artistry:</strong> Refine your technique with pro-level makeup coaching and specialized skills for high-definition results.</>,
  <><strong>Solve Skin Concerns:</strong> Confidently address acne, sensitivity, and advanced anti-aging needs for every client.</>,
  <><strong>Offer Expert Consultations:</strong> Conduct professional skincare assessments and recommend personalized products to increase your value.</>,
  <><strong>Scale Your Services:</strong> Create bespoke DIY skincare recipes and customized routines to boost your revenue and bookings.</>,
];

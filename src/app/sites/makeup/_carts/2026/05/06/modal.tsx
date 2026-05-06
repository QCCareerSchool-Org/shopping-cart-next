'use client';

import type { FC } from 'react';
import { FaCheckCircle, FaMagic } from 'react-icons/fa';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKitWithoutConcealer } from '@/components/luminousKitWithoutConcealer';
import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesDispatch } from '@/hooks/useCoursesDispatch';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20260506Modal: FC<Props> = props => {
  const coursesDispatch = useCoursesDispatch();
  const { countryCode, provinceCode } = useAddressState();
  const handleClick = () => {
    coursesDispatch({ type: 'CLEAR_COURSES', payload: { countryCode, provinceCode } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'mz' } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'sk' } });
    props.onHide();
  };

  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      onPrimaryClick={handleClick}
      heading={<Makeup20260506ModalHeading />}
      left={<Makeup20260506ModalLeft />}
      right={<Makeup20260506ModalRight />}
      headerAside={<Makeup20260506ModalOffer />}
      footerMessage={<>Start your journey today for only <span className="text-primary">$49</span>.</>}
    />
  );
};

const Makeup20260506ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaMagic /> Globally Recognized MIMP&trade; Certification
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>A Makeup Career that Grows With You</h2>
    <p className="text-secondary mb-0">Enroll in Master <strong>Makeup Artistry</strong> today and get the <strong>Skincare</strong> Course FREE.</p>
  </div>
);

const Makeup20260506ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>50% OFF</div>
    <div className="small fw-bold text-uppercase">Additional Certifications</div>
  </div>
);

const Makeup20260506ModalLeft: FC = () => (
  <>
    <div>
      <p>The Skincare course lets you expand your makeup expertise while opening doors to a new career as a skincare consultant. You'll learn to:</p>
      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
        {features.map(feature => (
          <li key={feature} className="d-flex gap-3">
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

const Makeup20260506ModalRight: FC = () => (
  <div className="bg-white border rounded-4 p-4 shadow-sm">
    <LuminousKitWithoutConcealer />
    <p className="small text-secondary mb-0 mt-3">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
  </div>
);

const features = [
  'Assess skin types and conditions',
  'Conduct personalized skincare consultations and recommend products',
  'Create DIY skincare recipes and understand anti-aging techniques',
  'Address common skin concerns like acne, sensitivity, and aging',
  'Understand skin anatomy and how it affects product selection',
  'Build customized skincare routines tailored to each client',
];

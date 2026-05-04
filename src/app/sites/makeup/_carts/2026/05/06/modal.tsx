'use client';

import type { FC } from 'react';
import { FaAward, FaCheckCircle, FaMagic, FaPalette, FaUsers } from 'react-icons/fa';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKitWithoutConcealer } from '@/components/luminousKitWithoutConcealer';
import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesDispatch } from '@/hooks/useCoursesDispatch';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Makeup20260422Modal: FC<Props> = props => {
  const coursesDispatch = useCoursesDispatch();
  const { countryCode, provinceCode } = useAddressState();
  const handleClick = () => {
    coursesDispatch({ type: 'CLEAR_COURSES', payload: { countryCode, provinceCode } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'mz' } });
    props.onHide();
  };

  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      onPrimaryClick={handleClick}
      heading={<Makeup20260422ModalHeading />}
      left={<Makeup20260422ModalLeft />}
      right={<Makeup20260422ModalRight />}
      headerAside={<Makeup20260422ModalOffer />}
      footerMessage={<>Start your journey today for only <span className="text-primary">$49</span>.</>}
    />
  );
};

const Makeup20260422ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaMagic /> Globally Recognized MIMP&trade; Certification
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>A Makeup Career that Grows With You</h2>
    <p className="text-secondary mb-0">Enroll in Master Makeup Artistry today and get 50% off additional courses.</p>
  </div>
);

const Makeup20260422ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>50% OFF</div>
    <div className="small fw-bold text-uppercase">Additional Certifications</div>
  </div>
);

const Makeup20260422ModalLeft: FC = () => (
  <>
    <div className="d-flex flex-column gap-4">
      {features.map(feature => (
        <div key={feature.title} className="d-flex gap-3">
          <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-white border shadow-sm" style={{ width: 48, height: 48, borderRadius: '50%' }}>
            {feature.icon}
          </div>
          <div>
            <h4 className="fs-5 sans-serif mb-1" style={{ color: '#0A0F3D' }}>{feature.title}</h4>
            <p className="text-secondary mb-0">{feature.description}</p>
          </div>
        </div>
      ))}
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

const Makeup20260422ModalRight: FC = () => (
  <div className="bg-white border rounded-4 p-4 shadow-sm">
    <LuminousKitWithoutConcealer />
    <p className="small text-secondary mb-0 mt-3">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
  </div>
);

const features = [
  {
    icon: <FaAward className="fs-4 text-primary" />,
    title: 'Lifetime Certification',
    description: 'Earn globally recognized designations that build credibility and support your career long-term.',
  },
  {
    icon: <FaUsers className="fs-4 text-primary" />,
    title: 'Mentorship from Industry Experts',
    description: 'Professional audio feedback sessions from a practicing event expert and business owner.',
  },
  {
    icon: <FaCheckCircle className="fs-4 text-primary" />,
    title: 'Business Training Built In',
    description: 'Actionable strategies and mentorship to confidently launch, market, and grow your business.',
  },
  {
    icon: <FaPalette className="fs-4 text-primary" />,
    title: 'Professional Makeup Kit',
    description: 'Build your kit with palettes, brushes, and tools selected for working makeup artists.',
  },
];

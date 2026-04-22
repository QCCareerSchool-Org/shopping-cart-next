'use client';

import type { FC } from 'react';
import { FaAward, FaBriefcase, FaCheckCircle, FaUsers } from 'react-icons/fa';

import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20260423Modal: FC<Props> = props => {
  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      heading={<Design20260423ModalHeading />}
      left={<Design20260423ModalLeft />}
      right={<Design20260423ModalRight />}
      headerAside={<Design20260423ModalOffer />}
      footerDisclaimer="* Flexible payment plans available or save when you pay in full today."
      footerMessage={<span />}
    />
  );
};

const Design20260423ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaBriefcase /> Professional Design Career
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>Unlock Your Professional Design Career</h2>
    <p className="text-secondary mb-0">Build diverse income streams with multiple professional designations&mdash;and offer clients MORE.</p>
  </div>
);

const Design20260423ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>50% OFF</div>
    <div className="small fw-bold text-uppercase">Additional Certifications</div>
  </div>
);

const Design20260423ModalLeft: FC = () => (
  <Design20260423ModalServices />
);

const Design20260423ModalRight: FC = () => (
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
        <span className="bg-primary small px-2 py-1 rounded text-uppercase fw-bold" style={{ color: '#0A0F3D', fontSize: '0.75rem' }}>Bonus</span>
        Free Software Access
      </h4>
      <p className="small mb-0">Enroll today and get 4 months of free access to <strong>DesignFiles</strong> software to streamline your new business.</p>
    </PromoModalDarkBlueBox>
  </>
);

const Design20260423ModalServices: FC = () => (
  <div>
    <h3 className="fs-5 sans-serif fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: '#0A0F3D' }}>
      <div style={{ width: 20, position: 'relative', top: -1 }}><FaBriefcase className="text-primary" /></div>
      <div>Expand Your Services &amp; Multiply Your Income</div>
    </h3>
    <p className="text-secondary mb-4">With multiple certifications, you'll have the skills and confidence to:</p>

    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
      {services.map(service => (
        <li key={service} className="d-flex align-items-start gap-3">
          <div style={{ width: 16 }}><FaCheckCircle className="text-primary mt-1 flex-shrink-0" /></div>
          <span>{service}</span>
        </li>
      ))}
    </ul>
  </div>
);

const services = [
  'Design cohesive, functional interiors using professional space planning and styling techniques',
  'Enhance properties with thoughtfully designed outdoor and landscape spaces',
  'Stage homes strategically to attract buyers and maximize value',
  'Create safe, accessible environments with Aging in Place expertise',
  'Guide clients with confidence through color selection and design harmony',
  'Build and grow a successful design business with professional systems and processes',
];

const features = [
  {
    icon: <FaAward className="fs-4 text-primary" />,
    title: 'Lifetime Certification',
    description: 'Earn globally recognized designations that build credibility and support your career long-term.',
  },
  {
    icon: <FaUsers className="fs-4 text-primary" />,
    title: 'Mentorship from Industry Experts',
    description: 'Professional audio feedback sessions from a practicing design expert and business owner.',
  },
  {
    icon: <FaCheckCircle className="fs-4 text-primary" />,
    title: 'Business Training Built In',
    description: 'Actionable strategies and mentorship to confidently launch, market, and grow your business.',
  },
];

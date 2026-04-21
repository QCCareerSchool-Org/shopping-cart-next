'use client';

import type { FC } from 'react';
import { FaAward, FaCheckCircle, FaLaptop, FaPlusCircle, FaUsers } from 'react-icons/fa';

import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Event20260422Modal: FC<Props> = props => (
  <PromoModal
    show={props.show}
    onHide={props.onHide}
    heading={<Event20260422ModalHeading />}
    left={<Event20260422ModalLeft />}
    right={<Event20260422ModalRight />}
    headerAside={<Event20260422ModalOffer />}
    footerMessage={<>Start your journey today for only <span className="text-primary">$75</span>.</>}
  />
);

const Event20260422ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaPlusCircle /> Additional Certifications
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>Unlock Your Event Planning Career</h2>
    <p className="text-secondary mb-0">Build multiple income streams and offer clients MORE.</p>
  </div>
);

const Event20260422ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>50% OFF</div>
    <div className="small fw-bold text-uppercase">Additional Certifications</div>
  </div>
);

const Event20260422ModalLeft: FC = () => (
  <Event20260422ModalServices />
);

const Event20260422ModalRight: FC = () => (
  <>
    <Event20260422ModalFeatures />

    <PromoModalDarkBlueBox>
      <h4 className="fw-bold sans-serif fs-4 mb-2 d-flex align-items-center gap-2">
        <span className="bg-primary small px-2 py-1 rounded text-uppercase fw-bold" style={{ color: '#0A0F3D', fontSize: '0.75rem' }}>Bonus</span>
        Free Software Access
      </h4>
      <p className="small mb-0">Enroll today and get six months of free access to <strong>AislePlanner</strong> software to streamline your new business.</p>
    </PromoModalDarkBlueBox>
  </>
);

const Event20260422ModalServices: FC = () => (
  <div>
    <h3 className="fs-5 sans-serif fw-bold mb-4" style={{ color: '#0A0F3D' }}>Expand Your Services</h3>
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

const Event20260422ModalFeatures: FC = () => (
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
);

const services = [
  'Plan unforgettable weddings and events clients rave about',
  'Design stunning event spaces that elevate every experience',
  'Take on corporate and branded events with confidence',
  'Execute destination weddings seamlessly from start to finish',
  'Step into luxury event planning and attract high-paying clients',
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
    description: 'Professional audio feedback sessions from a practicing event expert and business owner.',
  },
  {
    icon: <FaCheckCircle className="fs-4 text-primary" />,
    title: 'Business Training Built In',
    description: 'Actionable strategies and mentorship to confidently launch, market, and grow your business.',
  },
  {
    icon: <FaLaptop className="fs-4 text-primary" />,
    title: 'AislePlanner Included',
    description: 'Use professional planning software to manage your clients, timelines, and event details.',
  },
];

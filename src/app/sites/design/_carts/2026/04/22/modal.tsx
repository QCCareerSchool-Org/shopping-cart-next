'use client';

import type { FC } from 'react';
import { FaAward, FaBriefcase, FaCheckCircle, FaLaptop, FaRocket, FaUsers } from 'react-icons/fa';

import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20260422Modal: FC<Props> = props => (
  <PromoModal
    show={props.show}
    onHide={props.onHide}
    heading={<Design20260422ModalHeading />}
    left={<Design20260422ModalLeft />}
    right={<Design20260422ModalRight />}
    price="$2498"
    fullSavings="$500"
    deposit="$198"
  />
);

const Design20260422ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaRocket /> Career Accelerator
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>Interior Decorating Career Accelerator</h2>
    <p className="text-secondary mb-0">Enroll in the Interior Decorating Certification today and claim your FREE Business & Virtual Design Workshops ($1,896 value).</p>
  </div>
);

const Design20260422ModalLeft: FC = () => (
  <>
    <Design20260422ModalIncludes />
    <Design20260422ModalFeatures />
  </>
);

const Design20260422ModalRight: FC = () => (
  <PromoModalDarkBlueBox>
    <h4 className="fw-bold sans-serif fs-4 mb-2 d-flex align-items-center gap-2">
      <span className="bg-primary small px-2 py-1 rounded text-uppercase fw-bold" style={{ color: '#0A0F3D', fontSize: '0.75rem' }}>Bonus</span>
      Free Software Access
    </h4>
    <p className="small mb-0">Enroll today and get 4 months of free access to <strong>DesignFiles</strong> software to streamline your new business.</p>
  </PromoModalDarkBlueBox>
);

const Design20260422ModalIncludes: FC = () => (
  <div>
    <h3 className="fs-5 sans-serif fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#0A0F3D' }}>
      <div style={{ width: 20, position: 'relative', top: -1 }}><FaBriefcase className="text-primary" /></div>
      <div>The Career Accelerator Program Includes:</div>
    </h3>

    <div className="d-flex flex-column gap-4">
      {includes.map(item => (
        <div key={item.title}>
          <h4 className="fs-6 sans-serif fw-bold mb-1" style={{ color: '#0A0F3D' }}>{item.title}</h4>
          <p className="small text-secondary mb-0">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Design20260422ModalFeatures: FC = () => (
  <div className="mt-5">
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
  </div>
);

const includes = [
  {
    title: 'Interior Decorating Certification Course',
    description: 'Get certified in Interior Design and Decorating with one-on-one mentorship from top design mentors, a flexible schedule, and exclusive business training.',
  },
  {
    title: 'Accelerate Your Business Workshop',
    description: 'Learn how to launch and grow your design business, from pricing your services to landing your first client and marketing yourself with confidence.',
  },
  {
    title: 'Virtual Design Training',
    description: 'Develop in-demand skills to work with clients remotely using digital tools, allowing you to expand beyond your local market and reach a global audience.',
  },
  {
    title: 'Career Launch Toolkit',
    description: 'Start like a pro with ready-to-use client contracts, onboarding packages, business resources, and design software so you have the tools to begin working right away.',
  },
];

const features = [
  {
    icon: <FaAward className="fs-4 text-primary" />,
    title: 'Lifetime IDDP™ Certification',
    description: 'Earn a globally recognized designation that builds credibility and supports your career long-term.',
  },
  {
    icon: <FaUsers className="fs-4 text-primary" />,
    title: 'Mentorship from Industry Experts',
    description: 'Seven 1-on-1 professional audio feedback sessions from a practicing design expert and business owner.',
  },
  {
    icon: <FaCheckCircle className="fs-4 text-primary" />,
    title: 'Business Training Built In',
    description: 'Actionable strategies and mentorship to confidently launch, market, and grow your business.',
  },
  {
    icon: <FaLaptop className="fs-4 text-primary" />,
    title: 'Virtual Design Skills',
    description: 'Learn practical remote design workflows that help you serve more clients with confidence.',
  },
];

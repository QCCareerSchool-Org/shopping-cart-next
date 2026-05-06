'use client';

import type { FC } from 'react';
import { FaAward, FaBriefcase, FaCheckCircle, FaUsers } from 'react-icons/fa';

import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20260506Modal: FC<Props> = props => {
  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      heading={<Design20260506ModalHeading />}
      left={<Design20260506ModalLeft />}
      right={<Design20260506ModalRight />}
      headerAside={<Design20260506ModalOffer />}
      footerDisclaimer="* Flexible payment plans available or save when you pay in full today."
      footerMessage={<span />}
    />
  );
};

const Design20260506ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaBriefcase /> Professional Design Career
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>Interior Design Career Accelerator</h2>
    <p className="text-secondary mb-0">Enroll in the Interior Design Certification today and claim your FREE Business & Virtual Design Workshops ($1,896 value).</p>
  </div>
);

const Design20260506ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>$2498</div>
    <div className="small fw-bold text-uppercase">Save an additional $500 if you pay in full today.</div>
  </div>
);

const Design20260506ModalLeft: FC = () => (
  <div>
    <h3 className="fs-5 sans-serif fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#0A0F3D' }}>
      <div>The Career Accelerator Program Includes:</div>
    </h3>
    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
      {includedCourses.map(course => (
        <li key={course.title} className="d-flex align-items-start gap-3">
          <div style={{ width: 16 }}><FaCheckCircle className="text-primary mt-1 flex-shrink-0" /></div>
          <div>
            <h4 className="h5">{course.title}</h4>
            <span>{course.text}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Design20260506ModalRight: FC = () => (
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

const includedCourses = [
  { title: 'Interior Design Certification Course', text: 'Get certified in Interior Design and Decorating with one-on-one mentorship from top design mentors, a flexible schedule and exclusive business training.' },
  { title: 'Accelerate Your Business Workshop', text: 'Learn how to launch and grow your design business—from pricing your services to landing your first client and marketing yourself with confidence.' },
  { title: 'Virtual Design Training', text: 'Develop in-demand skills to work with clients remotely using digital tools, allowing you to expand beyond your local market and reach a global audience.' },
  { title: 'Career Launch Toolkit', text: 'Start like a pro with ready-to-use client contracts, onboarding packages, business resources and design software—so you have the tools to begin working right away.' },
];

const features = [
  {
    icon: <FaAward className="fs-4 text-primary" />,
    title: 'Lifetime IDDP™ Certification',
    description: 'Earn a globally recognized designation that builds credibility and supports your career in the long term.',
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
];

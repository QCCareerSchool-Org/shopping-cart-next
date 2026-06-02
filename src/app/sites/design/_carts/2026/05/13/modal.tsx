'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { FaAward, FaCheckCircle, FaUsers } from 'react-icons/fa';

import BooksImage from './id-books.jpg';
import { PromoModal } from '@/components/promoModal';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20260513Modal: FC<Props> = props => {
  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      heading={<Design20260513ModalHeading />}
      left={<Design20260513ModalLeft />}
      right={<Design20260513ModalRight />}
      footerDisclaimer="* Flexible payment plans available or save when you pay in full today."
      footerMessage={<span>Start your journey today for only <span className="text-primary">$198.</span></span>}
      bodyClassName="bg-white"
      footerClassName="bg-light"
    />
  );
};

const Design20260513ModalHeading: FC = () => (
  <>
    <div className="row align-items-center p-4">
      <div className="col-lg-8">
        <div className="position-relative z-1 flex-grow-1">
          <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>Unlock Your Professional Design Certification</h2>
          <p className="text-secondary mb-0">Enroll in any design course and receive a second course FREE. For a limited time, every Interior Design & Decorating enrollment also includes complimentary textbooks — giving you even more value as you build your skills. </p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="position-relative z-1 text-center bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
          <div className="small fw-bold text-center">Save up to an additional</div>
          <div className="fs-2 fw-bold text-center text-primary" style={{ lineHeight: 1.1 }}>$500</div>
          <div className="small fw-bold text-center">when you pay in full today!*</div>
        </div>
      </div>
    </div>
    <hr />
  </>
);

const Design20260513ModalLeft: FC = () => (
  <div className="d-flex flex-column gap-4">
    {features.map(feature => (
      <div key={feature.title} className="d-flex gap-3">
        <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-black border shadow-sm" style={{ width: 48, height: 48, borderRadius: '50%' }}>
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

const Design20260513ModalRight: FC = () => (
  <>
    <>
      <div className="container p-0 rounded overflow-hidden border">
        <Image src={BooksImage} alt="" className="img-fluid" />
        <div className="p-4 rounded bg-light">
          <h4 className="fw-bold mb-2">TEXTBOOKS INCLUDED</h4>
          <p>For a limited time only, course textbooks are included with every Interior Design & Decorating enrollment. </p>
        </div>
      </div>
    </>
  </>
);

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

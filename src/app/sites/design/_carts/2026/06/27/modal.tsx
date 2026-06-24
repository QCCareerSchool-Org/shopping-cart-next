'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { FaAward, FaUsers } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';

import BooksImage from './id-books.jpg';
import { PromoModal } from '@/components/promoModal';
import { useAddressState } from '@/hooks/useAddressState';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Design20260627Modal: FC<Props> = props => {
  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      heading={<Design20260627ModalHeading />}
      left={<Design20260627ModalLeft />}
      right={<Design20260627ModalRight />}
      headerAside={<Design20260627ModalOffer />}
      footerDisclaimer="* Flexible payment plans available."
      footerMessage="Start your journey today for only $198."
      bodyClassName="bg-white"
      footerClassName="bg-light"
    />
  );
};

const Design20260627ModalHeading: FC = () => {
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

const Design20260627ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 500 }}>
    <div className="small fw-bold text-center">Save up to an additional</div>
    <div className="fs-2 fw-bold text-center text-primary" style={{ lineHeight: 1.1 }}>$300</div>
    <div className="small fw-bold text-center">when you pay in full today!*</div>
  </div>
);

const Design20260627ModalLeft: FC = () => (
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

const Design20260627ModalRight: FC = () => (
  <>
    <div className="container p-0 rounded overflow-hidden border">
      <Image src={BooksImage} alt="" className="img-fluid" />
      <div className="p-4 rounded bg-light">
        <h4 className="fw-bold mb-2">TEXTBOOKS INCLUDED</h4>
        <p>For a limited time only, course textbooks are included with every Interior Design & Decorating enrollment. </p>
      </div>
    </div>
  </>
);

const features = [
  {
    icon: <FaUsers className="fs-4 text-primary" />,
    title: 'Learn From Expert Instructors',
    description: 'We\'ve hand-selected the top home design professionals in the industry to guide you through your course material.',
  },
  {
    icon: <FaAward className="fs-4 text-primary" />,
    title: 'Industry-Recognized Certifications',
    description: 'Graduate with professional design certifications and open up a world of career & business opportunities.',
  },
  {
    icon: <FaArrowTrendUp className="fs-4 text-primary" />,
    title: 'Business Training Included',
    description: 'Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified decorator or designer.',
  },
];

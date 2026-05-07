'use client';

import type { FC } from 'react';
import { FaAward, FaBriefcase, FaChartLine, FaCheckCircle, FaMagic, FaUsers } from 'react-icons/fa';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKitWithoutConcealer } from '@/components/luminousKitWithoutConcealer';
import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesDispatch } from '@/hooks/useCoursesDispatch';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const AllAccessModal: FC<Props> = props => {
  const coursesDispatch = useCoursesDispatch();
  const { countryCode, provinceCode } = useAddressState();

  const handleClick = () => {
    coursesDispatch({ type: 'CLEAR_COURSES', payload: { countryCode, provinceCode } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { countryCode, provinceCode, courseCode: 'AM' } });
    props.onHide();
  };

  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      onPrimaryClick={handleClick}
      heading={<AllAccessModalHeading />}
      left={<AllAccessModalCourses />}
      right={<AllAccessModalFeatures />}
      standardPrice="$8287"
      price="$3398"
      deposit="$398"
      fullSavings="$400"
    />
  );
};

const AllAccessModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaMagic /> All-Access Program
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>Unlock Your Makeup Career</h2>
    <p className="text-secondary mb-0">Enroll once, unlock full access to every QC Makeup Academy course.</p>
  </div>
);

const AllAccessModalCourses: FC = () => (
  <>
    <div>
      <h3 className="fs-5 sans-serif fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#0A0F3D' }}>
        <div style={{ width: 20, position: 'relative', top: -1 }}><FaBriefcase className="text-primary" /></div>
        <div className="text-nowrap">Certification Courses Included</div>
      </h3>

      <ul className="list-unstyled d-flex flex-column gap-3 flex-grow-1 mb-0">
        {courses.map(course => (
          <li key={course} className="d-flex align-items-start gap-3">
            <div style={{ width: 14 }}><FaCheckCircle className="text-primary mt-1 flex-shrink-0" /></div>
            {course}
          </li>
        ))}
      </ul>
    </div>

    <div className="p-3 rounded-3 border" style={{ backgroundColor: 'rgba(13, 110, 253, 0.08)', borderColor: 'rgba(13, 110, 253, 0.2)' }}>
      <p className="small fw-bold mb-0" style={{ color: '#0A0F3D' }}>Need more time? <span className="fw-normal text-secondary">Simply contact the school and we'll extend your one-year completion time for free.</span></p>
    </div>
  </>
);

const AllAccessModalFeatures: FC = () => (
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
        Luminous Makeup Kit + Pro Discounts
      </h4>
      <p className="small mb-4">Enroll today and get the Luminous Makeup Kit, included with the Master Makeup Artistry course + access to exclusive discounts to preferred makeup partners like Mac, Smashbox and more.</p>
      <div className="bg-white border rounded-4 p-3 shadow-sm text-dark">
        <LuminousKitWithoutConcealer />
        <p className="small text-secondary mb-0 mt-3">Kits will be sent after 30 days to students with accounts in good standing. Items in the kit are subject to change. <a target="_blank" rel="noreferrer" href={agreementLinks.default}>Read more</a></p>
      </div>
    </PromoModalDarkBlueBox>
  </>
);

const courses = [
  'Master Makeup Artistry',
  'Skincare Consultant',
  'Special FX Makeup',
  'Pro Makeup Workshop',
  'Hair Styling Essentials',
  'Airbrush Makeup Workshop',
  'Portfolio Development',
  'Personal Styling',
];

const features = [
  {
    icon: <FaUsers className="fs-4 text-primary" />,
    title: 'Learn From a Celebrity Makeup Artist',
    description: 'Every course includes guidance from experienced makeup artists and beauty industry professionals, and practical assignments with personalized feedback.',
  },
  {
    icon: <FaAward className="fs-4 text-primary" />,
    title: '9 Certifications Included',
    description: 'Graduate with up to eight industry-recognized certifications, plus the prestigious Elite Beauty Professional designation.',
  },
  {
    icon: <FaChartLine className="fs-4 text-primary" />,
    title: 'Business Training Built In',
    description: 'Actionable strategies and mentorship to confidently launch, market, and grow your beauty business.',
  },
];

'use client';

import type { FC } from 'react';
import { FaAward, FaBriefcase, FaChartLine, FaCheckCircle, FaShieldAlt, FaUsers } from 'react-icons/fa';

import styles from './modal.module.css';
import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';
import { useCoursesDispatch } from '@/hooks/useCoursesDispatch';

interface Props {
  show: boolean;
  onHide: () => void;
  countryCode: string;
  provinceCode: string | null;
}

export const AllAccessModal: FC<Props> = props => {
  const coursesDispatch = useCoursesDispatch();

  const handleClick = () => {
    coursesDispatch({ type: 'CLEAR_COURSES', payload: { countryCode: props.countryCode, provinceCode: props.provinceCode } });
    coursesDispatch({ type: 'ADD_COURSE', payload: { courseCode: 'aa', countryCode: props.countryCode, provinceCode: props.provinceCode } });
    props.onHide();
  };

  const [ standardPrice, price, deposit, fullSavings ] = props.countryCode === 'CA' && props.provinceCode === 'ON'
    ? [ '$7331', '$1998', '$398', '$100' ]
    : props.countryCode === 'AU'
      ? [ '$10,270', '$4898', '$398', '$500' ]
      : props.countryCode === 'NZ'
        ? [ '$10,818', '$5898', '$398', '$700' ]
        : props.countryCode === 'GB'
          ? [ '£6108', '£2558', '£398', '£300' ]
          : [ '$7331', '$3398', '$398', '$400' ];

  return (
    <PromoModal
      show={props.show}
      onHide={props.onHide}
      onPrimaryClick={handleClick}
      heading={<AllAccessModalHeading />}
      left={<AllAccessModalCourses />}
      right={<AllAccessModalFeatures />}
      standardPrice={standardPrice}
      price={price}
      deposit={deposit}
      fullSavings={fullSavings}
    />
  );
};

export const AllAccessModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(29, 209, 161, 0.1)', color: '#0f766e', border: '1px solid rgba(29, 209, 161, 0.2)' }}>
      <FaShieldAlt /> All-Access Program
    </div>
    <h2 className={`fs-2 fw-bolder ${styles['text-dark-blue']} mb-2`}>Unlock Your Event Planning Career</h2>
    <p className="text-secondary mb-0">Enroll once, unlock full access to every event planning course.</p>
  </div>
);

export const AllAccessModalCourses: FC = () => (
  <>
    <div>
      <h3 className={`fs-5 sans-serif fw-bold ${styles['text-dark-blue']} mb-4 d-flex align-items-center gap-2`}>
        <div style={{ width: 20, position: 'relative', top: -1 }}><FaBriefcase className="text-primary" /></div>
        <div className="text-nowrap">Certification Courses Included</div>
      </h3>

      <ul className="list-unstyled d-flex flex-column gap-3 flex-grow-1 mb-0">
        {courses.map(c => (
          <li key={c} className="d-flex align-items-start gap-3 feature-item">
            <div style={{ width: 14 }}><FaCheckCircle className="text-primary mt-1 flex-shrink-0" /></div>
            {c}
          </li>
        ))}
      </ul>
    </div>

    <div className="p-3 rounded-3 border" style={{ backgroundColor: 'rgba(29, 209, 161, 0.1)', borderColor: 'rgba(29, 209, 161, 0.2)' }}>
      <p className="small fw-bold mb-0" style={{ color: '#0f766e' }}>Need more time? <span className="fw-normal" style={{ color: '#115e59' }}>Simply contact the school and we'll extend your one-year completion time for free.</span></p>
    </div>
  </>
);

export const AllAccessModalFeatures: FC = () => (
  <>
    <div className="d-flex flex-column gap-4">
      {features.map(f => (
        <div key={f.title} className={`d-flex gap-3 ${styles['feature-item']}`}>
          <div className={`${styles['feature-icon-wrapper']} flex-shrink-0 shadow-sm`}>{f.icon}</div>
          <div>
            <h4 className={`fs-5 sans-serif ${styles['text-dark-blue']} mb-1`}>{f.title}</h4>
            <p className="text-secondary mb-0">{f.description}</p>
          </div>
        </div>
      ))}
    </div>

    <PromoModalDarkBlueBox>
      <h4 className="fw-bold sans-serif fs-4 mb-2 d-flex align-items-center gap-2"><span className={`bg-primary ${styles['text-dark-blue']} small px-2 py-1 rounded text-uppercase fw-bold`} style={{ fontSize: '0.75rem' }}>Bonus</span> Free Software Access</h4>
      <p className="small mb-0">Enroll today and get six months of free access to <strong>AislePlanner</strong> software to streamline your new business.</p>
    </PromoModalDarkBlueBox>
  </>
);

const courses = [
  'Event & Wedding Planning',
  'Corporate Event Planning',
  'Event Decor',
  'Luxury Wedding & Event Planning',
  'Destination Wedding Planning',
  'Promotional Event Planning',
  'Festivals & Live Events',
  'Virtual Events Training',
  'Accelerate Your Business',
];

const features = [
  {
    icon: <FaUsers className="fs-4 text-primary" />,
    title: 'Learn From Industry Experts',
    description: 'Every course includes guidance from experienced event planners and practical assignments with personalized feedback.',
  },
  {
    icon: <FaAward className="fs-4 text-primary" />,
    title: '10 Certifications Included',
    description: 'Graduate with up to ten industry-recognized certifications, including the prestigious Master Planner Certificate.',
  },
  {
    icon: <FaChartLine className="fs-4 text-primary" />,
    title: 'Business Training Built In',
    description: 'Actionable strategies and mentorship to confidently launch, market, and grow your services.',
  },
];

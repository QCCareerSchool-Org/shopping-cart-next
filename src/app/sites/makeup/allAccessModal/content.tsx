import type { FC } from 'react';
import { FaAward, FaChartLine, FaCheckCircle, FaMagic, FaUsers } from 'react-icons/fa';

import { agreementLinks } from '@/app/sites/makeup/agreementLinks';
import { LuminousKitWithoutConcealer } from '@/components/luminousKitWithoutConcealer';
import { PromoModalContent, PromoModalDarkBlueBox, PromoModalPriceBox } from '@/components/promoModal';

interface Props {
  onHide: () => void;
  onPrimaryClick?: () => void;
}

export const AllAccessModalContent: FC<Props> = props => (
  <PromoModalContent
    onHide={props.onHide}
    onPrimaryClick={props.onPrimaryClick}
    heading={<AllAccessModalHeading />}
    left={<AllAccessModalCourses />}
    right={<AllAccessModalFeatures />}
    headerAside={<PromoModalPriceBox standardValue="$8287" price="$3398" fullSavings="$400" />}
    footerMessage={<>Start your journey today for only <span className="text-primary">$398</span>.</>}
  />
);

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
      <h3 className="fs-5 sans-serif fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#0A0F3D' }}>Certification Courses Included</h3>
      <ul className="list-unstyled d-flex flex-column gap-2 flex-grow-1 mb-0">
        {courses.map(course => (
          <li key={course} className="d-flex align-items-start gap-3">
            <div style={{ width: 14 }}><FaCheckCircle className="text-primary mt-1 flex-shrink-0" /></div>
            {course}
          </li>
        ))}
      </ul>
    </div>

    <div className="d-flex flex-column gap-3">
      {features.map(feature => (
        <div key={feature.title}>
          <h4 className="fs-5 sans-serif mb-1" style={{ color: '#0A0F3D' }}>{feature.title}</h4>
          <p className="text-secondary mb-0">{feature.description}</p>
        </div>
      ))}
    </div>

    <div className="p-3 rounded-3 border" style={{ backgroundColor: 'rgba(13, 110, 253, 0.08)', borderColor: 'rgba(13, 110, 253, 0.2)' }}>
      <p className="small fw-bold mb-0" style={{ color: '#0A0F3D' }}>Need more time? <span className="fw-normal text-secondary">Simply contact the school and we'll extend your one-year completion time for free.</span></p>
    </div>
  </>
);

const AllAccessModalFeatures: FC = () => (
  <>
    <PromoModalDarkBlueBox>
      <div className="mb-2">
        <span className="bg-primary small px-2 py-1 rounded text-uppercase fw-bold" style={{ color: '#0A0F3D', fontSize: '0.75rem' }}>Bonus</span>
      </div>
      <h4 className="fw-bold sans-serif fs-4 mb-2 d-flex align-items-center">Luminous Makeup Kit + Pro Discounts</h4>
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

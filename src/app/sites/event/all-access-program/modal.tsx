'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { FaAward, FaBriefcase, FaChartLine, FaCheckCircle, FaShieldAlt, FaUsers } from 'react-icons/fa';

import styles from './modal.module.css';

interface Props {
  show: boolean;
  onHide: () => void;
  standardPrice: string;
  price: string;
  deposit: string;
  savings: string;
}

export const AllAccessModal: FC<Props> = props => {
  const handleViewPaymentPlansClick = () => {
    props.onHide();
  };

  return (
    <Modal show={props.show} onHide={props.onHide} size="xl" contentClassName="bg-white rounded-4">
      <div className="bg-light w-100 d-flex flex-column overflow-hidden rounded-5">

        {/* Modal Header */}
        <div className="bg-white border-bottom p-4 px-lg-5 d-flex flex-column flex-lg-row align-items-md-center justify-content-between gap-4 position-relative overflow-hidden flex-shrink-0">
          <div className="position-relative z-1 flex-grow-1">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(29, 209, 161, 0.1)', color: '#0f766e', border: '1px solid rgba(29, 209, 161, 0.2)' }}>
              <FaShieldAlt /> ALL-ACCESS PROGRAM
            </div>
            <h2 className={`fs-2 fw-bolder ${styles['text-dark-blue']} mb-2`}>Unlock Your Event Planning Career</h2>
            <p className="text-secondary mb-0">Enroll once, unlock full access to every QC Event Planning course.</p>
          </div>

          {/* Pricing Block */}
          <div className="position-relative z-1 text-center text-md-end bg-light p-3 rounded-3 border" style={{ minWidth: 190 }}>
            <div className="small text-secondary mb-1">
              Standard Value <span className={styles.crossedOut}>{props.standardPrice}</span>
            </div>
            <div className="d-flex align-items-top justify-content-center mb-2">
              <span className={`fs-1 fw-bold ${styles['text-dark-blue']}`} style={{ lineHeight: 1.1 }}>{props.price}</span>
              <span className="small fw-medium text-secondary">*</span>
            </div>
            <div className="small fw-medium text-primary">You save {props.savings} today</div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 p-xl-5 flex-grow-1">
          <div className="row g-5">

            {/* Left Column: Courses list */}
            <div className={`col-lg-6 d-flex flex-column gap-5 justify-content-between ${styles.colLeft}`}>
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
            </div>

            {/* Vertical Divider (Desktop only) */}
            <div className={`d-none d-lg-block col-lg-1 position-relative ${styles.colCenter}`}>
              <div className="position-absolute top-0 bottom-0 start-50 border-start border-secondary-subtle" />
            </div>

            {/* Right Column: Value Props */}
            <div className={`${styles.colRight} col-lg-6 d-flex flex-column gap-5 justify-content-between`}>
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

              {/* Bonus Highlight */}
              <div className={`position-relative overflow-hidden rounded-4 ${styles['bg-dark-blue']} text-white p-4 shadow`}>
                <div className="position-absolute rounded-circle bg-primary opacity-25 pointer-events-none" style={{ top: '-20px', right: '-20px', width: '100px', height: '100px', filter: 'blur(30px)' }} />
                <h4 className="fw-bold sans-serif fs-4 mb-2 d-flex align-items-center gap-2"><span className={`bg-primary ${styles['text-dark-blue']} small px-2 py-1 rounded text-uppercase fw-bold`} style={{ fontSize: '0.75rem' }}>Bonus</span> Free Software Access</h4>
                <p className="small mb-0">Enroll today and get six months of free access to <strong>AislePlanner</strong> software to streamline your new business.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-white border-top p-4 px-xl-5 flex-shrink-0 d-flex flex-column flex-lg-row align-items-center justify-content-between w-100 z-1 gap-4">
          <div className="text-center text-sm-start mb-sm-0">
            <p className="small mb-1 text-nowrap text-secondary">* Flexible payment plans available.</p>
            <p className={`${styles['text-dark-blue']} fw-bold mb-0 text-nowrap`}>Start your journey today for only <span className="text-primary">{props.deposit}</span>.</p>
          </div>

          <div className="d-flex flex-column flex-sm-row gap-3">
            <button onClick={handleViewPaymentPlansClick} className={`btn bg-white fw-bold ${styles['text-dark-blue']}`} style={{ border: '1px solid #e2e8f0', padding: '0.6rem 1.5rem', borderRadius: '0.5rem' }}>View Payment Plans</button>
            <button onClick={handleViewPaymentPlansClick} className="btn btn-primary fw-bold" style={{ padding: '0.6rem 1.5rem', borderRadius: '0.5rem' }}>Enroll Now</button>
          </div>
        </div>

      </div>
    </Modal>
  );
};

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

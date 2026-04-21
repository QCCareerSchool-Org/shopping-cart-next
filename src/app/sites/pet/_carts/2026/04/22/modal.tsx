'use client';

import type { FC } from 'react';
import { FaAward, FaCheckCircle, FaDog, FaHandsHelping } from 'react-icons/fa';

import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Pet20260422Modal: FC<Props> = props => (
  <PromoModal
    show={props.show}
    onHide={props.onHide}
    heading={<Pet20260422ModalHeading />}
    left={<Pet20260422ModalLeft />}
    right={<Pet20260422ModalRight />}
    headerAside={<Pet20260422ModalOffer />}
    footerMessage={<>Start your journey today for only <span className="text-primary">$99</span>.</>}
  />
);

const Pet20260422ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaDog /> Pet Care Career
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>Unlock Your Pet Care Career</h2>
    <p className="text-secondary mb-0">Enroll in any pet care course and save an extra $200 on your tuition!</p>
  </div>
);

const Pet20260422ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>$200 OFF</div>
    <div className="small fw-bold text-uppercase mb-2">All Courses</div>
    <div className="small text-secondary">+ Get <strong className="text-primary">50% off</strong> any additional courses.</div>
  </div>
);

const Pet20260422ModalLeft: FC = () => (
  <>
    <Pet20260422ModalCourses />
    <Pet20260422ModalFeatures />
  </>
);

const Pet20260422ModalRight: FC = () => (
  <PromoModalDarkBlueBox>
    <h4 className="fw-bold sans-serif fs-4 mb-2 d-flex align-items-center gap-2">
      <span className="bg-primary small px-2 py-1 rounded text-uppercase fw-bold" style={{ color: '#0A0F3D', fontSize: '0.75rem' }}>Bonus</span>
      50% Off Additional Courses
    </h4>
    <p className="small mb-0">Build a broader skill set with half off any additional pet care courses you add today.</p>
  </PromoModalDarkBlueBox>
);

const Pet20260422ModalCourses: FC = () => (
  <div>
    <div className="d-flex flex-column gap-4">
      {courses.map(course => (
        <div key={course.title}>
          <h4 className="fs-6 sans-serif fw-bold mb-1" style={{ color: '#0A0F3D' }}>{course.title}</h4>
          <p className="small text-secondary mb-0">{course.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Pet20260422ModalFeatures: FC = () => (
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

const courses = [
  {
    title: 'Professional Dog Grooming | IDGP™',
    description: 'Master every level of dog grooming from bathing, brushing, and pet cuts to advanced breed styling. Learn all about dog anatomy and behavior, how to use grooming tools safely and effectively, and how to expertly groom any breed.',
  },
  {
    title: 'Dog Training | IDTP™',
    description: "Practice scientifically proven methods of dog training derived from learning theory and industry best practices. You'll gain a thorough understanding of how dogs learn, how to modify unwanted behaviors, and how to create new behaviors in all types of dogs.",
  },
  {
    title: 'Dog Daycare | IDCP™',
    description: "Learn everything from basic dog behavior and communication to business and marketing tips that will help you grow your clientele. You'll gain a thorough understanding of proper handling, hygiene, and safety techniques to become a trusted expert in your field.",
  },
  {
    title: 'Dog Behavior | IDBS™',
    description: "Build on your excellent foundation in dog training and learn how to deal with advanced concerns like anxiety, phobias, reactivity, and even aggression. Learn specialized behavior modification skills so you'll be ready to help any dog that comes your way.",
  },
];

const features = [
  {
    icon: <FaAward className="fs-4 text-primary" />,
    title: 'Lifetime Certification',
    description: 'Earn globally recognized designations that build credibility and support your career long-term.',
  },
  {
    icon: <FaDog className="fs-4 text-primary" />,
    title: 'Hands-On Training with Real Dogs',
    description: "Develop practical grooming and training skills by working directly with dogs so you're confident handling real clients from day one.",
  },
  {
    icon: <FaHandsHelping className="fs-4 text-primary" />,
    title: 'Mentorship from Industry Experts',
    description: 'Professional audio feedback sessions from a practicing event expert and business owner.',
  },
  {
    icon: <FaCheckCircle className="fs-4 text-primary" />,
    title: 'Business Training Built In',
    description: 'Actionable strategies and mentorship to confidently launch, market, and grow your business.',
  },
];

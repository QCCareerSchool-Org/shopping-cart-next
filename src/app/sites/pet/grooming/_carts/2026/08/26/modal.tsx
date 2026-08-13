'use client';

import type { FC } from 'react';
import { FaDog } from 'react-icons/fa';

import { GroomingKit } from '@/components/groomingKit';
import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Grooming20260826Modal: FC<Props> = props => (
  <PromoModal
    show={props.show}
    onHide={props.onHide}
    heading={<Grooming20260826ModalHeading />}
    left={<Grooming20260826ModalLeft />}
    right={<Grooming20260826ModalRight />}
    headerAside={<Grooming20260826ModalOffer />}
    footerMessage={<>Start your journey today for only <span className="text-primary">$99</span>.</>}
  />
);

const Grooming20260826ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaDog /> Pet Care Career
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>Unlock Your Pet Care Career</h2>
    <p className="text-secondary mb-0">Enroll in Dog Grooming and save an extra $400 on your tuition!</p>
  </div>
);

const Grooming20260826ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="fs-2 fw-bold text-start" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>+ FREE</div>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>Grooming Kit</div>
  </div>
);

const Grooming20260826ModalLeft: FC = () => (
  <Grooming20260826ModalCourses />
);

const Grooming20260826ModalRight: FC = () => (
  <div>
    <h4>Pro Dog Grooming Kit Included </h4>
    <p>Get hands-on training with a professional grooming kit valued at over $200, packed with the essential tools you'll use throughout your course and into your grooming career.</p>
    <GroomingKit hideScissorsDescription />
  </div>
);

const Grooming20260826ModalCourses: FC = () => (
  <div>
    <div className="d-flex flex-column">
      <div>
        <h4 className="mb-2">Earn Your Full Professional Grooming Certification</h4>
        <p>+ 6 practical skill certificates</p>
      </div>
      <p>Graduate with your <strong>IDGP (International Dog Grooming Professional) certification</strong>—your complete professional credential that demonstrates you've mastered the knowledge and hands-on skills needed to work as a dog groomer.</p>
      <p>Along the way, you'll also earn <strong>6 practical skill certificates</strong> that showcase your expertise in key grooming techniques:</p>
      <ul>
        {skills.map((skill, i) => (
          <li key={i} className="mb-2">{skill}</li>
        ))}
      </ul>
    </div>
    <PromoModalDarkBlueBox>
      <h4 className="fw-bold sans-serif fs-4 mb-2 d-flex align-items-center gap-2">
        <span className="bg-primary small px-2 py-1 rounded text-uppercase fw-bold" style={{ color: '#0A0F3D', fontSize: '0.75rem' }}>Bonus</span>
        50% Off Additional Courses
      </h4>
      <p className="small mb-0">Build a broader skill set with half off any additional pet care courses you add today.</p>
    </PromoModalDarkBlueBox>
  </div>
);

const skills = [ 'Pet Grooming First Aid', 'Bathing & Brushing', 'Natural Breed Grooming', 'Teddy Bear Cut', 'Terrier Grooming', 'Poodle Grooming' ];

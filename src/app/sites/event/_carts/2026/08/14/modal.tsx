'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

import BooksImage from './books.jpg';
import { PromoModal, PromoModalDarkBlueBox } from '@/components/promoModal';

interface Props {
  show: boolean;
  onHide: () => void;
}

export const Event20260814Modal: FC<Props> = props => (
  <PromoModal
    show={props.show}
    onHide={props.onHide}
    heading={<Event20260506ModalHeading />}
    left={<Event20260506ModalLeft />}
    right={<Event20260506ModalRight />}
    headerAside={<Event20260506ModalOffer />}
    footerMessage={<>Start your journey today for only <span className="text-primary">$75</span>.</>}
  />
);

const Event20260506ModalHeading: FC = () => (
  <div className="position-relative z-1 flex-grow-1">
    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-bold text-uppercase mb-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)', color: '#0A0F3D', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
      <FaPlusCircle /> Additional Certifications
    </div>
    <h2 className="fs-2 fw-bolder mb-2" style={{ color: '#0A0F3D' }}>Unlock Your Event Planning Career</h2>
    <p className="text-secondary mb-0">Enroll in any foundation course and get two specialty courses FREE!</p>
  </div>
);

const Event20260506ModalOffer: FC = () => (
  <div className="position-relative z-1 text-center text-lg-end bg-light p-3 rounded-3 border mx-auto" style={{ maxWidth: 300 }}>
    <div className="small fw-bold text-uppercase">Save an additional</div>
    <div className="fs-2 fw-bold" style={{ color: '#0A0F3D', lineHeight: 1.1 }}>$300+</div>
    <div className="small fw-bold text-uppercase">when you pay in full today!*</div>
  </div>
);

const Event20260506ModalLeft: FC = () => (
  <>
    <div>
      <h3 className="fs-5 sans-serif fw-bold mb-4" style={{ color: '#0A0F3D' }}>Expand Your Services with 2 Free Specialty Courses</h3>
      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
        {services.map(service => (
          <li key={service} className="d-flex align-items-start gap-3">
            <div style={{ width: 16 }}><FaCheckCircle className="text-primary mt-1 flex-shrink-0" /></div>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
    <PromoModalDarkBlueBox>
      <h4 className="fw-bold sans-serif fs-4 mb-2 d-flex align-items-center gap-2">
        <span className="bg-primary small px-2 py-1 rounded text-uppercase fw-bold" style={{ color: '#0A0F3D', fontSize: '0.75rem' }}>Bonus</span>
        BONUS Free Software Access
      </h4>
      <p className="small mb-0">Enroll today and get six months of free access to <strong>AislePlanner</strong> software to streamline your new business.</p>
    </PromoModalDarkBlueBox>
  </>
);

const Event20260506ModalRight: FC = () => (
  <>
    <div className="container p-0 rounded overflow-hidden border">
      <Image src={BooksImage} alt="" className="img-fluid" />
      <div className="p-4 rounded bg-light">
        <h4 className="fw-bold mb-2">TEXTBOOKS + PORTFOLIO INCLUDED</h4>
        <p>For a limited time only, course textbooks and a leather portfolio are included with every Event & Wedding Planning enrollment.</p>
      </div>
    </div>

  </>
);

const services = [
  'Plan unforgettable weddings and events clients rave about',
  'Design stunning event spaces that elevate every experience',
  'Take on corporate and branded events with confidence',
  'Execute destination weddings seamlessly from start to finish',
  'Step into luxury event planning and attract high-paying clients',
];

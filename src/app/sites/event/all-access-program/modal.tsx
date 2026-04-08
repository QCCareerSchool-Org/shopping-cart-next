'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './modal.module.scss';

interface Props {
  show: boolean;
  onHide: () => void;
  deposit: string;
  price: string;
}

export const AllAccessModal: FC<Props> = ({ show, onHide: handleHide, deposit, price }) => {
  return (
    <Modal show={show} onHide={handleHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title><span className={styles.title}>Sign Up for the All-Access Program for only <del className={styles.del}>$7331</del> <strong>{price}*</strong></span></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Enroll in the All-Access Program and unlock full access to every QC Event Planning course.</p>
        <h4 className="h6">Courses Included:</h4>
        <ul>
          <li>Event & Wedding Planning</li>
          <li>Corporate Event Planning</li>
          <li>Event Decor</li>
          <li>Luxury Wedding & Event Planning</li>
          <li>Destination Wedding Planning</li>
          <li>Promotional Event Planning</li>
          <li>Festivals & Live Events</li>
          <li>Accelerate Your Business</li>
          <li>Virtual Events Training</li>
        </ul>
        <h4 className="h6">Learn From Industry Experts</h4>
        <p>Every course includes guidance from experienced event planners and practical assignments with feedback.</p>
        <h4 className="h6">Earn Multiple Professional Certifications</h4>
        <p>Graduate with up to ten industry-recognized certifications, including the Master Planner Certificate, to build credibility and attract clients. Need more time? Simply contact the school and we'll extend your one-year completion time.</p>
        <h4 className="h6">Business Training Built In</h4>
        <p className="mb-0">Each course provides strategies and mentorship to help you confidently launch, market, and grow your event services. Plus, get six months free access to AislePlanner software.</p>
      </Modal.Body>
      <Modal.Footer>
        * or start for only <strong>{deposit}</strong>
      </Modal.Footer>
    </Modal>
  );
};

'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { AllAccessHero } from './hero';
import styles from './promo.module.scss';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#030419';

export const AllAccessPromo: FC = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <AllAccessHero />
        </div>
      </Section>
      <Section className="text-center">
        <h2>Enroll in the All-Access Program</h2>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title><span className={styles.title}>Sign Up for the All-Access Program for only <del className={styles.del}>$8026</del> <strong>$2998*</strong></span></Modal.Title>
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
          </ul>
          <h4 className="h6">Learn From Industry Experts</h4>
          <p>Every course includes guidance from experienced event planners and practical assignments with feedback.</p>
          <h4 className="h6">Earn Multiple Professional Certifications</h4>
          <p>Graduate with up to ten industry-recognized certifications, including the Master Planner Certificate, to build credibility and attract clients. Need more time? Simply contact the school and we'll extend your one-year completion time.</p>
          <h4 className="h6">Business Training Built In</h4>
          <p className="mb-0">Each course provides strategies and mentorship to help you confidently launch, market, and grow your event services. Plus, get six months free access to AislePlanner software.</p>
        </Modal.Body>
        <Modal.Footer>
          * or start for only <strong>$398</strong>
        </Modal.Footer>
      </Modal>
    </>
  );
};

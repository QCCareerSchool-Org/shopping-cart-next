'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { AllAccessHero } from './hero';
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
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Everything You Need to Launch a Full-Service Event Business</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enroll in the All-Access Program and get complete access to every QC Event Planning course.</p>
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
          <h4 className="h6">Learn From Expert Instructors</h4>
          <p>We've hand-selected the top event planning professionals in the industry to guide you through your course material.</p>
          <h4 className="h6">Industry-Recognized Certifications</h4>
          <p>Graduate with three professional event planning certifications and open up a world of career & business opportunities.</p>
          <h4 className="h6">Business Training Included</h4>
          <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified event planner.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

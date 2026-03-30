'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { ProfitPivotHero } from './hero';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#5a4332';

export const ProfitPivotPromo: FC = () => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <ProfitPivotHero />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Become a Certified Expert in less than 3 months!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is your opportunity to make a strategic move toward higher-paying events. For a limited time, enroll in any foundation course and get <strong>2 FREE specialty courses + $100 OFF tuition&mdash;combined value of over $1,200!</strong></p>
          <h4 className="h6">Start Your Profit Pivot Today</h4>
          <p>Upgrade your skills, reposition your services, and begin attracting higher-value clients—so you can book more profitable events, faster than you think.</p>
          <h4 className="h6">Learn From Industry Experts</h4>
          <p>Every course includes guidance from experienced event planners and practical assignments with feedback.</p>
          <h4 className="h6">Business Training Built In</h4>
          <p className="mb-0">Each course provides strategies and mentorship to help you confidently launch, market, and grow your event services. Plus, get six months free access to AislePlanner software.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

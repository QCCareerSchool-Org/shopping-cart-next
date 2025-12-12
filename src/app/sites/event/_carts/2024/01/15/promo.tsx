'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#020d1f';
const lastChanceDate = Date.UTC(2024, 0, 17, 5); // 2024-01-17T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 0, 20, 5); // 2024-01-20T00:00 (05:00 UTC)

interface Props {
  date: number;
}

export const Event20240115Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero lastChance={date >= lastChanceDate} />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>Start Your Event Planning Career This New Year</Modal.Header>
        <Modal.Body>
          <p className="lead mb-0">For a limited time, enroll in any foundation course and get TWO specialty courses free! This is the perfect opportunity to specialize in your event planning training and become a certified expert.</p>
        </Modal.Body>
      </Modal>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};

'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#fff';
const lastChanceDate = Date.UTC(2023, 11, 11, 5); // 2023-12-11T00:00 (05:00 UTC)
const endDate = Date.UTC(2023, 11, 16, 5); // 2023-12-16T00:00 (05:00 UTC)

interface Props {
  date: number;
}

export const Event20231206Promo: FC<Props> = ({ date }) => {
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
        <Modal.Header closeButton>Start Your Event Planning Career This Holiday Season</Modal.Header>
        <Modal.Body>
          <p className="lead mb-0">For a limited time, enroll in any foundation course and get a specialty course free!</p>
        </Modal.Body>
      </Modal>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This holiday offer ends soon! 🔔⛄</span>}
        className="bg-black text-light"
      />
    </>
  );
};

'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { LuminousKit } from '@/components/luminousKit';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#fff';
const lastChanceDate = Date.UTC(2023, 11, 11, 5); // 2023-12-11T00:00 (05:00 UTC)
const endDate = Date.UTC(2023, 11, 16, 5); // 2023-12-16T00:00 (05:00 UTC)

interface Props {
  date: number;
}

export const Makeup20231206Promo: FC<Props> = ({ date }) => {
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
        <Modal.Header closeButton>Start Your Makeup Career This Holiday Season</Modal.Header>
        <Modal.Body>
          <p>For a limited time, enroll in <strong>Master Makeup Artistry</strong> and get QC's <strong>Skincare course</strong> FREE. You'll also get the ENTIRE Luminous Makeup Collection!</p>
          <LuminousKit />
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

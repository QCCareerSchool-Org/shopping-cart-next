'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { LuminousKit } from '@/components/luminousKit';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#030303';
const lastChanceDate = Date.UTC(2024, 0, 1, 5); // 2024-01-01T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 0, 6, 5); // 2024-01-06T00:00 (05:00 UTC)

type Props = {
  date: number;
};

export const Makeup20231226Promo: FC<Props> = ({ date }) => {
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
          <p>For a limited time, enroll in <strong>Master Makeup Artistry</strong> and get QC's <strong>Pro Makeup Workshop</strong> FREE. You'll also get the ENTIRE Luminous Makeup Collection!</p>
          <LuminousKit />
        </Modal.Body>
      </Modal>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This new year offer ends soon! 🎇🎉</span>}
        className="bg-black text-light"
      />
    </>
  );
};

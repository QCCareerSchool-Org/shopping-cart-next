'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { DesignStudent20240724Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#000';
const lastChanceDate = Date.UTC(2024, 6, 27, 4); // 2024-07-27T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 7, 1, 4); // 2024-08-01T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const DesignStudent20240724Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero />
        </div>
      </Section>
      <DesignStudent20240724Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This special offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};

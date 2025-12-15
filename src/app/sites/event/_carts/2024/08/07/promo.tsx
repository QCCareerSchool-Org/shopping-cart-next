'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Event20240807Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#2d232b';
const lastChanceDate = Date.UTC(2024, 7, 13, 13, 30); // 2024-08-13T09:30 (13:30 UTC)
const endDate = Date.UTC(2024, 7, 17, 4); // 2024-08-17T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const Event20240807Promo: FC<Props> = ({ date }) => {
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
      <Event20240807Modal show={showPopup} onHide={handleClick} />
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

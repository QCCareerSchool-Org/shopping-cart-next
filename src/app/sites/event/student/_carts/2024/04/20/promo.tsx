'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { EventStudent20240420Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#84796c';
const lastChanceDate = Date.UTC(2024, 2, 26, 4); // 2024-03-26T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 2, 30, 4); // 2024-03-30T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const EventStudent20240420Promo: FC<Props> = ({ date }) => {
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
      <EventStudent20240420Modal show={showPopup} onHide={handleClick} />
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

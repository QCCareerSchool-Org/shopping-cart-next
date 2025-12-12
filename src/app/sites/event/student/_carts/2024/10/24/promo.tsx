'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { EventStudent20241024Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#84796c';
const lastChanceDate = Date.UTC(2024, 9, 29, 4); // 2024-10-29T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 10, 2, 4); // 2024-11-02T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const EventStudent20241024Promo: FC<Props> = ({ date }) => {
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
      <EventStudent20241024Modal show={showPopup} onHide={handleClick} />
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

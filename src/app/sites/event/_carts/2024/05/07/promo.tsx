'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Event20240507Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#2d232b';
const lastChanceDate = Date.UTC(2024, 4, 12, 4); // 2024-05-12T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 4, 16, 4); // 2024-05-16T00:00 (04:00 UTC)

type Props = {
  date: number;
};

export const Event20240507Promo: FC<Props> = ({ date }) => {
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
      <Event20240507Modal show={showPopup} onHide={handleClick} />
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

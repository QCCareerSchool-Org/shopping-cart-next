'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Design20240115Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#dae8f5';
const lastChanceDate = Date.UTC(2024, 0, 17, 5); // 2024-01-17T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 0, 20, 5); // 2024-01-20T00:00 (05:00 UTC)

interface Props {
  date: number;
}

export const Design20240115Promo: FC<Props> = ({ date }) => {
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
      <Design20240115Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon! 🎇🎉</span>}
        className="bg-black text-light"
      />
    </>
  );
};

'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Design20231226Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#73725e';
const lastChanceDate = Date.UTC(2024, 0, 1, 5); // 2024-01-01T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 0, 6, 5); // 2024-01-06T00:00 (05:00 UTC)

interface Props {
  date: number;
}

export const Design20231226Promo: FC<Props> = ({ date }) => {
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
      <Design20231226Modal show={showPopup} onHide={handleClick} />
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

'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Design20240522Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#56d6bf';
const lastChanceDate = Date.UTC(2024, 4, 27, 4); // 2024-05-27T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 5, 1, 4); // 2024-06-01T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const Design20240522Promo: FC<Props> = ({ date }) => {
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
      <Design20240522Modal show={showPopup} onHide={handleClick} />
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

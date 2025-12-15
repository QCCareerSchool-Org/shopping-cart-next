'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Design20241007Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#223d4d';
const lastChanceDate = Date.UTC(2024, 9, 12, 4); // 2024-10-12T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 9, 17, 4); // 2024-10-17T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const Design20241007Promo: FC<Props> = ({ date }) => {
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
      <Design20241007Modal show={showPopup} onHide={handleClick} />
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

'use client';

import type { FC } from 'react';

import { Hero } from './hero';
import { Design20240912Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#223d4d';
const lastChanceDate = Date.UTC(2024, 8, 17, 4); // 2024-09-17T00:00 (04:00 UTC)
const endDate = Date.UTC(2024, 8, 21, 4); //  2024-09-21T00:00 (04:00 UTC)

type Props = {
  date: number;
};

export const Design20240912Promo: FC<Props> = ({ date }) => {
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
      <Design20240912Modal show={showPopup} onHide={handleClick} />
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

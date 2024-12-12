'use client';

import type { FC } from 'react';

import { Hero20241213 } from './hero';
import { Pet20241213Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#49d4f1';
const lastChanceDate = Date.UTC(2024, 11, 18, 8); // 2024-12-18T03:00 (08:00 UTC)
const endDate = Date.UTC(2024, 11, 19, 8); // 2024-12-19T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const Pet20241213Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20241213 lastChance={date >= lastChanceDate} />
        </div>
      </Section>
      <Pet20241213Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};

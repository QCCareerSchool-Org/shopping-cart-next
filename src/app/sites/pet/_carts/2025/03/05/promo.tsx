'use client';

import type { FC } from 'react';

import { Hero20250305 } from './hero';
import { Pet20250305Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#fc3839';
const lastChanceDate = Date.UTC(2025, 2, 10, 7); // 2025-03-10T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 2, 11, 7); // 2025-03-11T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Pet20250305Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250305 variant={variant} />
        </div>
      </Section>
      <Pet20250305Modal show={showPopup} onHide={handleClick} />
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

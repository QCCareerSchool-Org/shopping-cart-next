'use client';

import type { FC } from 'react';

import { Hero20250206 } from './hero';
import { Pet20250206Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#478798';
const lastChanceDate = Date.UTC(2025, 1, 14, 8); // 2025-02-14T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 1, 15, 8); // 2025-02-15T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const Pet20250206Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250206 variant={variant} />
        </div>
      </Section>
      <Pet20250206Modal show={showPopup} onHide={handleClick} />
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

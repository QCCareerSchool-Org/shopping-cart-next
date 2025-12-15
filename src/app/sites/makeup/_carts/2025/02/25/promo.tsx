'use client';

import type { FC } from 'react';

import { Hero20250225 } from './hero';
import { Makeup20250225Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#0d0d0d';
const lastChanceDate = Date.UTC(2025, 1, 28, 8); // 2025-02-28T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 2, 1, 8); // 2025-03-01T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const Makeup20250225Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250225 variant={variant} />
        </div>
      </Section>
      <Makeup20250225Modal show={showPopup} onHide={handleClick} />
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

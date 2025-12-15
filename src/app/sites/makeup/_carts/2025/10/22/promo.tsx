'use client';

import type { FC } from 'react';

import { Hero20251022 } from './hero';
import { Makeup20251022Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#0d0d0d';
const lastChanceDate = Date.UTC(2025, 9, 31, 7); // 2025-10-31T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 10, 1, 7); // 2025-11-01T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const Makeup20251022Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20251022 variant={variant} />
        </div>
      </Section>
      <Makeup20251022Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};

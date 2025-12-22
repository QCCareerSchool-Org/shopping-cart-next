'use client';

import type { FC } from 'react';

import { Hero20251226 } from './hero';
import { Event20251226Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#1A1A1A';
const lastChanceDate = Date.UTC(2026, 0, 2, 8); // 2026-01-02T03:00 (08:00 UTC)
const endDate = Date.UTC(2026, 0, 3, 8); // 2026-01-03T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const Event20251226Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20251226 variant={variant} />
        </div>
      </Section>
      <Event20251226Modal show={showPopup} onHide={handleClick} />
    </>
  );
};

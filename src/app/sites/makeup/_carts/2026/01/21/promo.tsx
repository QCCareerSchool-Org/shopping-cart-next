'use client';

import type { FC } from 'react';

import { Hero20260121 } from './hero';
import { Makeup20260121Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#050914';
const lastChanceDate = Date.UTC(2026, 0, 30, 8); // 2026-01-30T03:00 (08:00 UTC)
const endDate = Date.UTC(2026, 0, 31, 8); // 2026-01-31T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const Makeup20260121Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20260121 variant={variant} />
        </div>
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />
      <Makeup20260121Modal show={showPopup} onHide={handleClick} />
    </>
  );
};

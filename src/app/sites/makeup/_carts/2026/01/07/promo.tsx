'use client';

import type { FC } from 'react';

import { Hero20260107 } from './hero';
import { Makeup20260107Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#000000';
const lastChanceDate = Date.UTC(2026, 0, 16, 8); // 2026-01-16T03:00 (08:00 UTC)
const endDate = Date.UTC(2026, 0, 17, 8); // 2026-01-17T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const Makeup20260107Promo: FC<Props> = ({ date }) => {
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
          <Hero20260107 variant={variant} />
        </div>
      </Section>
      <Makeup20260107Modal show={showPopup} onHide={handleClick} />
    </>
  );
};

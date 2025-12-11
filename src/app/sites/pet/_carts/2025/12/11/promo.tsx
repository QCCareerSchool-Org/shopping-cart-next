'use client';

import type { FC } from 'react';

import { Hero20251211 } from './hero';
import { Pet20251211Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#094b2f';
const lastChanceDate = Date.UTC(2025, 11, 19, 8); // 2025-12-19T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 11, 20, 8); // 2025-12-20T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const Pet20251211Promo: FC<Props> = ({ date }) => {
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
          <Hero20251211 variant={variant} />
        </div>
      </Section>
      <Pet20251211Modal show={showPopup} onHide={handleClick} />
    </>
  );
};

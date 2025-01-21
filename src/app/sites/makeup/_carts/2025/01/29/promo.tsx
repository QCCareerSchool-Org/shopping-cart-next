'use client';

import type { FC } from 'react';

import { Hero20250129 } from './hero';
import { Makeup20250129Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#f9f9f9';
const lastChanceDate = Date.UTC(2025, 0, 31, 8); // 2025-01-31T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 1, 1, 8); // 2025-02-01T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const Makeup20250129Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250129 variant={variant} />
        </div>
      </Section>
      <Makeup20250129Modal show={showPopup} onHide={handleClick} />
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

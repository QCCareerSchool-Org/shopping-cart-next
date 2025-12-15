'use client';

import type { FC } from 'react';

import { Hero20250319 } from './hero';
import { Design20250319Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#2f1105';
const lastChanceDate = Date.UTC(2025, 2, 26, 7); // 2025-03-26T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 2, 27, 7); // 2025-03-27T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const Design20250319Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250319 variant={variant} />
        </div>
      </Section>
      <Design20250319Modal show={showPopup} onHide={handleClick} />
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

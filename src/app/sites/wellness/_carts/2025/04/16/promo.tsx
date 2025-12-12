'use client';

import type { FC } from 'react';

import { Hero20250416 } from './hero';
import { Wellness20250416Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#d7d8dc';
const lastChanceDate = Date.UTC(2025, 3, 18, 7); // 2025-04-18T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 3, 19, 7); // 2025-04-19T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const Wellness20250416Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250416 variant={variant} />
        </div>
      </Section>
      <Wellness20250416Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};

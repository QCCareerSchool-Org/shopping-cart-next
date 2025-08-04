'use client';

import type { FC } from 'react';

import { Hero20250806 } from './hero';
import { Wellness20250806Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#d7d8dc';
const lastChanceDate = Date.UTC(2025, 7, 15, 7); // 2025-08-15T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 7, 16, 7); // 2025-08-16T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Wellness20250806Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250806 variant={variant} />
        </div>
      </Section>
      <Wellness20250806Modal show={showPopup} onHide={handleClick} />
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

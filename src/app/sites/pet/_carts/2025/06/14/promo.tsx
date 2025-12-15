'use client';

import type { FC } from 'react';

import { Hero20250614 } from './hero';
import { Pet20250614Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#1c9797';
const lastChanceDate = Date.UTC(2025, 5, 16, 7); // 2025-06-16T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 5, 17, 7); // 2025-06-17T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const Pet20250614Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250614 variant={variant} />
        </div>
      </Section>
      <Pet20250614Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};

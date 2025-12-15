'use client';

import type { FC } from 'react';

import { Hero20250701 } from './hero';
import { Makeup20250701Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#4c7aaa';
const lastChanceDate = Date.UTC(2025, 6, 4, 7); // 2025-07-04T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 6, 5, 7); // 2025-07-05T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const Makeup20250701Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250701 variant={variant} />
        </div>
      </Section>
      <Makeup20250701Modal show={showPopup} onHide={handleClick} />
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

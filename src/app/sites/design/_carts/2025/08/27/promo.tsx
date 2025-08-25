'use client';

import type { FC } from 'react';

import { Hero20250827 } from './hero';
import { Design20250827Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#191c1b';
const lastChanceDate = Date.UTC(2025, 8, 5, 7); // 2025-09-05T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 8, 6, 7); // 2025-09-06T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Design20250827Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250827 variant={variant} />
        </div>
      </Section>
      <Design20250827Modal show={showPopup} onHide={handleClick} />
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

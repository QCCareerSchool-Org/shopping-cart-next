'use client';

import type { FC } from 'react';

import { Hero20250604 } from './hero';
import { Design20250604Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#7f766d';
const lastChanceDate = Date.UTC(2025, 5, 13, 7); // 2025-06-13T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 5, 14, 7); // 2025-06-14T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Design20250604Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250604 variant={variant} />
        </div>
      </Section>
      <Design20250604Modal show={showPopup} onHide={handleClick} />
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

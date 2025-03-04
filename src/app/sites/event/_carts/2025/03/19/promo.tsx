'use client';

import type { FC } from 'react';

import { Hero20250319 } from './hero';
import { Event20250319Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#fec200';
const lastChanceDate = Date.UTC(2025, 2, 26, 7); // 2025-03-26T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 2, 27, 7); // 2025-03-27T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Event20250319Promo: FC<Props> = ({ date }) => {
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
      <Event20250319Modal show={showPopup} onHide={handleClick} />
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

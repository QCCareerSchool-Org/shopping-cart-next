'use client';

import type { FC } from 'react';

import { Hero20250407 } from './hero';
import { Event20250407Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#eddfbc';
const lastChanceDate = Date.UTC(2025, 3, 13, 7); // 2025-04–13T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 3, 16, 7); // 2025-04–16T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Event20250407Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250407 variant={variant} />
        </div>
      </Section>
      <Event20250407Modal show={showPopup} onHide={handleClick} />
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

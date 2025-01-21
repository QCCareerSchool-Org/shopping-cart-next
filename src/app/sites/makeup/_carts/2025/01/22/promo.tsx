'use client';

import type { FC } from 'react';

import { Hero20250122 } from './hero';
import { Makeup20250122Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#131f2e';
const lastChanceDate = Date.UTC(2025, 0, 28, 8); // 2025-01-28T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 0, 29, 8); // 2025-01-29T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const Makeup20250122Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250122 variant={variant} />
        </div>
      </Section>
      <Makeup20250122Modal show={showPopup} onHide={handleClick} />
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

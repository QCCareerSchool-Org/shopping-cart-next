'use client';

import type { FC } from 'react';

import { Hero20251022 } from './hero';
import { Design20251022Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#010427';
const lastChanceDate = Date.UTC(2025, 9, 17, 7); // 2025-10-17T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 9, 18, 7); // 2025-10-18T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Design20251022Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20251022 variant={variant} />
        </div>
      </Section>
      <Design20251022Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
        className="bg-black text-light"
        newHaus
      />
    </>
  );
};

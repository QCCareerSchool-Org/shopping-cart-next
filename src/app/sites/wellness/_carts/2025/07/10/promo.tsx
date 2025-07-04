'use client';

import type { FC } from 'react';

import { Hero20250710 } from './hero';
import { Wellness20250710Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#d7d8dc';
const lastChanceDate = Date.UTC(2025, 6, 18, 7); // 2025-07-18T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 6, 19, 7); // 2025-07-19T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Wellness20250710Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250710 variant={variant} />
        </div>
      </Section>
      <Wellness20250710Modal show={showPopup} onHide={handleClick} />
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

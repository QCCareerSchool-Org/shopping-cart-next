'use client';

import type { FC } from 'react';

import { Hero20250820 } from './hero';
import { Design20250820Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#01271f';
const lastChanceDate = Date.UTC(2025, 7, 20, 7); // 2025-08-20T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 7, 26, 7); // 2025-08-26T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const Design20250820Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250820 variant={variant} />
        </div>
      </Section>
      <Design20250820Modal show={showPopup} onHide={handleClick} />
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

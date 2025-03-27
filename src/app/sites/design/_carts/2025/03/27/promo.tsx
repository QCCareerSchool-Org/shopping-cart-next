'use client';

import type { FC } from 'react';
import { useMemo } from 'react';

import { Hero20250327 } from './hero';
import { Design20250327Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#2f1105';
const firstEndDate = Date.UTC(2025, 3, 1, 7); // 2025-04–01T03:00 (07:00 UTC)
const secondEndDate = Date.UTC(2025, 3, 3, 7); // 2025-04–03T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Design20250327Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const [ lastChanceDate, endDate ] = useMemo(() => {
    if (date < firstEndDate) {
      return [ Date.UTC(2025, 2, 30, 7), firstEndDate ]; // 2025-03-30T03:00 (07:00 UTC)
    }
    return [ Date.UTC(2025, 3, 2, 7), secondEndDate ]; // 2025-04-02T03:00 (07:00 UTC)
  }, [ date ]);

  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20250327 variant={variant} />
        </div>
      </Section>
      <Design20250327Modal show={showPopup} onHide={handleClick} />
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

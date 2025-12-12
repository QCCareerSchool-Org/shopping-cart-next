'use client';

import type { FC } from 'react';
import { useMemo } from 'react';

import { Hero20250327 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#ee7077';
const firstEndDate = Date.UTC(2025, 3, 1, 7); // 2025-04–01T03:00 (07:00 UTC)
const secondEndDate = Date.UTC(2025, 3, 3, 7); // 2025-04–03T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const PetStudent20250327Promo: FC<Props> = ({ date }) => {
  const [ lastChanceDate, endDate ] = useMemo(() => {
    if (date < firstEndDate) {
      return [ Date.UTC(2025, 2, 30, 7), firstEndDate ]; // 2025-03-30T03:00 (07:00 UTC)
    }
    return [ Date.UTC(2025, 3, 2, 7), secondEndDate ]; // 2025-04-02T03:00 (07:00 UTC)
  }, [ date ]);

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero20250327 />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This special offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};

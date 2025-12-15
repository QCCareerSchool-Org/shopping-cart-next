'use client';

import { type FC, useMemo } from 'react';

import { Hero20250924 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#0f141a';
const firstLastChanceDate = Date.UTC(2025, 8, 26, 7); // 2025-09-26T03:00 (07:00 UTC)
const firstEndDate = Date.UTC(2025, 8, 27, 7); // 2025-09-27T03:00 (07:00 UTC)
const secondLastChanceDate = Date.UTC(2025, 8, 30, 7); // 2025-09-30T03:00 (07:00 UTC)
const secondEndDate = Date.UTC(2025, 9, 1, 7); // 2025-10-01T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const EventStudent20250924Promo: FC<Props> = ({ date }) => {
  const [ lastChanceDate, endDate ] = useMemo(() => {
    if (date > firstEndDate) {
      return [ secondLastChanceDate, secondEndDate ];
    }
    return [ firstLastChanceDate, firstEndDate ];
  }, [ date ]);

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero20250924 />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This special offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};

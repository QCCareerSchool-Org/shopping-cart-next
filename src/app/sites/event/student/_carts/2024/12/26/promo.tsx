'use client';

import type { FC } from 'react';
import { useMemo } from 'react';

import { Hero20241226 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#727274';
const extensionDate = Date.UTC(2025, 0, 4, 8); // 2024-01-04T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const EventStudent20241226Promo: FC<Props> = ({ date }) => {
  const [ lastChanceDate, endDate ] = useMemo(() => {
    if (date < extensionDate) {
      const lcDate = Date.UTC(2025, 0, 3, 8); // 2025-01-03T03:00 (08:00 UTC);
      return [
        lcDate,
        extensionDate,
      ];
    }
    const lcDate = Date.UTC(2025, 0, 5, 8); // 2025-01-05T03:00 (08:00 UTC);
    return [
      lcDate,
      Date.UTC(2025, 0, 6, 8), // 2024-01-04T03:00 (08:00 UTC)
    ];
  }, [ date ]);

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero20241226 />
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

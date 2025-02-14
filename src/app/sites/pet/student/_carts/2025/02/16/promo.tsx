'use client';
import type { FC } from 'react';
import { useMemo } from 'react';

import { Hero20250216 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#0d130a';
const extensionDate = Date.UTC(2025, 1, 20, 4); // 2025-02-20T00:00 (04:00 UTC)

type Props = {
  date: number;
};

export const PetStudent20250216Promo: FC<Props> = ({ date }) => {
  const [ lastChanceDate, endDate ] = useMemo(() => {
    if (date >= extensionDate) {
      return [
        Date.UTC(2025, 1, 21, 8), // 2025-02-21T03:00 (08:00 UTC)
        Date.UTC(2025, 1, 22, 8), // 2025-02-22T03:00 (08:00 UTC)
      ];
    }
    return [
      Date.UTC(2025, 1, 19, 8), // 2025-02-19T03:00 (08:00 UTC)
      Date.UTC(2025, 1, 20, 4), // 2025-02-20T00:00 (08:00 UTC)
    ];
  }, [ date ]);

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero20250216 />
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

'use client';

import type { FC } from 'react';

import { Hero20251129 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#004D5F';
const lastChanceDate = Date.UTC(2025, 11, 5, 8); // 2025-12-05T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 11, 6, 8); // 2025-12-06T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const PetStudent20251129Promo: FC<Props> = ({ date }) => {

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero20251129 />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};

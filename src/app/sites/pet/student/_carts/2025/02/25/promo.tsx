'use client';

import type { FC } from 'react';

import { Hero20250225 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#ee7077';
const lastChanceDate = Date.UTC(2025, 1, 28, 8); // 2025-02-28T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 2, 1, 8); // 2025-03-01T03:00 (08:00 UTC)

type Props = {
  date: number;
};

export const PetStudent20250225Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20250225 />
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

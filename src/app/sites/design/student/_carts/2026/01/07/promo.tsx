'use client';

import type { FC } from 'react';

import { Hero20260107 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#000E35';
const lastChanceDate = Date.UTC(2026, 0, 16, 8); // 2026-01-16T03:00 (08:00 UTC)
const endDate = Date.UTC(2026, 0, 17, 8); // 2026-01-17T03:00 (08:00 UTC)

interface Props {
  date: number;
}

export const DesignStudent20260107Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20260107 />
    </Section>
    <CountDownTimerWrapper
      date={date}
      showDate={lastChanceDate}
      endDate={endDate}
      message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
      className="bg-black text-light"
    />
  </>
);

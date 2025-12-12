'use client';

import type { FC } from 'react';

import { Hero20250614 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#525253';
const lastChanceDate = Date.UTC(2025, 5, 16, 7); // 2025-06-16T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 5, 17, 7); // 2025-06-17T03:00 (07:00 UTC)

interface Props {
  date: number;
}

export const MakeupStudent20250614Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20250614 />
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

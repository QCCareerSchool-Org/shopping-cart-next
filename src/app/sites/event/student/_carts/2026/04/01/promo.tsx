'use client';

import type { FC } from 'react';

import { Hero20260401 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#727274';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const EventStudent20260401Promo: FC<Props> = ({ date, period }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20260401 />
    </Section>
    <CountDownTimerWrapper
      date={date}
      showDate={period.lastChance}
      endDate={period.end}
      message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
      className="bg-black text-light"
    />
  </>
);

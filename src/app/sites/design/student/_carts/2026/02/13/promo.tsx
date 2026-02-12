'use client';

import type { FC } from 'react';

import { Hero20260213 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import type { BaseLastChancePeriod } from '@/lib/period';

const backgroundColor = '#0f141a';

interface Props {
  date: number;
  promotionPeriod: BaseLastChancePeriod;
}

export const DesignStudent20260213Promo: FC<Props> = ({ date, promotionPeriod }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20260213 />
    </Section>
    <CountDownTimerWrapper
      date={date}
      showDate={promotionPeriod.lastChance}
      endDate={promotionPeriod.end}
      message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
      className="bg-black text-light"
    />
  </>
);

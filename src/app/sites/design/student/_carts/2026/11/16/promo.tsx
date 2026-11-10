'use client';

import type { FC } from 'react';

import { HeroStudent20261116 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import type { LastChancePeriodDTO } from '@/lib/period';

const backgroundColor = '#000000';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const DesignStudent20261116Promo: FC<Props> = ({ date, period }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <HeroStudent20261116 />
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

'use client';

import type { FC } from 'react';

import { Hero20261104 } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import type { LastChanceWithExtensionPeriodDTO } from '@/lib/period';

const backgroundColor = '#000000';

interface Props {
  date: number;
  period: LastChanceWithExtensionPeriodDTO;
}

export const EventStudent20261104Promo: FC<Props> = ({ date, period }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero20261104 />
    </Section>
    <CountDownTimerWrapper
      date={date}
      showDate={period.lastChance}
      endDate={period.lastChance + (24 * 60 * 60 * 1000)}
      message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
      className="bg-black text-light"
    />
    <CountDownTimerWrapper
      date={date}
      showDate={period.extension}
      endDate={period.end}
      message={<span style={{ textTransform: 'uppercase' }}>This special offer ends soon!</span>}
      className="bg-black text-light"
    />
  </>
);

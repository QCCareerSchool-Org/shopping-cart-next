import type { FC } from 'react';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#aaaba9';
const endDate = Date.UTC(2024, 4, 10, 10); // May 10 6:00PM ET (10:00 UTC)

interface Props {
  date: number;
}

export const EventStudent60Promo: FC<Props> = ({ date }) => (
  <>
    <Section style={{ backgroundColor }} noPadding>
      <Hero />
    </Section>
    <CountDownTimerWrapper
      date={date}
      showDate={date}
      endDate={endDate}
      message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive ends soon!</span>}
      className="bg-primary text-light"
    />
  </>
);

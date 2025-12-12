import type { FC } from 'react';
import { useMemo } from 'react';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';

const backgroundColor = '#d7d8dc';
const lastChanceDate = Date.UTC(2024, 7, 26, 4); // 2024-08-26T00:00 (04:00 UTC)
const firstEndDate = Date.UTC(2024, 7, 31, 4); //  2024-08-31T00:00 (04:00 UTC)
const secondEndDate = Date.UTC(2024, 8, 7, 4); // 2024-09-07T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const Wellness20240821Promo: FC<Props> = ({ date }) => {
  const endDate = useMemo(() => (date < firstEndDate ? firstEndDate : secondEndDate), [ date ]);

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Hero lastChance={date >= lastChanceDate} />
      </Section>
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};

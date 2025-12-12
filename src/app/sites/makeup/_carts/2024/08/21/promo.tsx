'use client';

import type { FC } from 'react';
import { useMemo } from 'react';

import { Hero } from './hero';
import { Makeup20240821Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const firstBackgroundColor = '#fff';
const firstLastChanceDate = Date.UTC(2024, 7, 26, 4); // 2024-08-26T00:00 (04:00 UTC)
const firstEndDate = Date.UTC(2024, 7, 31, 4); //  2024-08-31T00:00 (04:00 UTC)

const secondBackgroundColor = '#003323';
const secondLastChanceDate = Date.UTC(2024, 8, 4, 4); // 2024-09-04T00:00 (04:00 UTC)
const secondEndDate = Date.UTC(2024, 8, 7, 4); // 2024-09-07T00:00 (04:00 UTC)

interface Props {
  date: number;
}

export const Makeup20240821Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const [ backgroundColor, lastChanceDate, endDate ] = useMemo(() => {
    if (date < firstEndDate) {
      return [ firstBackgroundColor, firstLastChanceDate, firstEndDate ];
    }
    return [ secondBackgroundColor, secondLastChanceDate, secondEndDate ];
  }, [ date ]);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero round2={date >= firstEndDate} lastChance={date >= lastChanceDate} />
        </div>
      </Section>
      <Makeup20240821Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-black text-light"
      />
    </>
  );
};

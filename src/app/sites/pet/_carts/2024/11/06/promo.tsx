'use client';

import type { FC } from 'react';

import { Hero20241106 } from './hero';
import { Pet20241106Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#100f0f';
const lastChanceDate = Date.UTC(2024, 10, 10, 5); // 2024-11-10T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 10, 13, 5); // 2024-11-13T00:00 (05:00 UTC)

type Props = {
  date: number;
};

export const Pet20241106Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero20241106 lastChance={date >= lastChanceDate} />
        </div>
      </Section>
      <Pet20241106Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive ends soon!</span>}
        className="bg-primary text-light"
      />
    </>
  );
};

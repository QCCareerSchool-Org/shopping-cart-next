'use client';

import type { FC } from 'react';

import { HeroAllCourses } from './hero';
import { DesignAllCoursesModal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#191c1b';
const lastChanceDate = Date.UTC(2025, 8, 5, 7); // 2025-09-05T03:00 (07:00 UTC)
const endDate = Date.UTC(2025, 8, 6, 7); // 2025-09-06T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const DesignAllCoursesPromo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <HeroAllCourses variant={variant} />
        </div>
      </Section>
      <DesignAllCoursesModal show={showPopup} onHide={handleClick} />
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

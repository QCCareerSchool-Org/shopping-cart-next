'use client';

import Link from 'next/link';
import { type FC, useMemo } from 'react';

import { Banner } from './banner';
import { Hero20250924 } from './hero';
import { Design20250924Modal } from './modal';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#010427';
const firstLastChanceDate = Date.UTC(2025, 8, 26, 7); // 2025-09-26T03:00 (07:00 UTC)
const firstEndDate = Date.UTC(2025, 8, 27, 7); // 2025-09-27T03:00 (07:00 UTC)
const secondLastChanceDate = Date.UTC(2025, 8, 30, 7); // 2025-09-30T03:00 (07:00 UTC)
const secondEndDate = Date.UTC(2025, 9, 1, 7); // 2025-10-01T03:00 (07:00 UTC)

type Props = {
  date: number;
};

export const Design20250924Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);

  const [ lastChanceDate, endDate ] = useMemo(() => {
    if (date > firstEndDate) {
      return [ secondLastChanceDate, secondEndDate ];
    }
    return [ firstLastChanceDate, firstEndDate ];
  }, [ date ]);

  const variant = date >= lastChanceDate ? 'lastChance' : undefined;

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <Link href="#courses">
          <div>
            <Hero20250924 variant={variant} />
          </div>
        </Link>
      </Section>
      <Design20250924Modal show={showPopup} onHide={handleClick} />
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive offer ends soon!</span>}
        className="bg-black text-light"
        newHaus
      />
      <Banner variant={variant} onClick={handleClick} />
    </>
  );
};

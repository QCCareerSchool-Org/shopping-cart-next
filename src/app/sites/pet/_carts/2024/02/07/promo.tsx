'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { Section } from '@/components/section';
import { usePriceState } from '@/hooks/usePriceState';
import { useToggle } from '@/hooks/useToggle';

const backgroundColor = '#000';
const lastChanceDate = Date.UTC(2024, 1, 11, 5); // 2024-02-11T00:00 (05:00 UTC)
const endDate = Date.UTC(2024, 1, 15, 5); // 2024-02-15T00:00 (05:00 UTC)

interface Props {
  date: number;
}

export const Pet20240207Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useToggle(false);
  const priceState = usePriceState();

  const discount = priceState?.currency.code === 'GBP' ? '£150' : '$200';

  const handleClick = (): void => {
    togglePopup();
  };

  return (
    <>
      <Section style={{ backgroundColor }} noPadding>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          <Hero lastChance={date >= lastChanceDate} />
        </div>
      </Section>
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>Start Your Pet Care Career</Modal.Header>
        <Modal.Body>
          <p className="lead mb-0">Until February 14th, enroll in any pet course and get {discount} off your tuition!</p>
        </Modal.Body>
      </Modal>
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

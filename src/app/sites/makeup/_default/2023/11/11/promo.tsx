'use client';

import { useReducer } from 'react';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { Hero } from './hero';
import { CountDownTimerWrapper } from '@/components/countDownTimer/countDownTimerWrapper';
import { LuminousKit } from '@/components/luminousKit';
import { Section } from '@/components/section';

type Props = {
  date: number;
};

const lastChanceDate = Date.UTC(2023, 9, 30);
const endDate = Date.UTC(2023, 10, 5);
const backgroundColor = 'black';

export const Makeup20231111Promo: FC<Props> = ({ date }) => {
  const [ showPopup, togglePopup ] = useReducer(state => !state, false);

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
      <CountDownTimerWrapper
        date={date}
        showDate={lastChanceDate}
        endDate={endDate}
        buttonInverse={true}
        className="bg-black text-white"
        message={<><span style={{ textTransform: 'uppercase' }}>Last chance!</span> This exclusive offer ends soon!</>}
      />
      <Modal show={showPopup} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title>Free Pro Makeup Workshop</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Get the entire <strong>Luminous Collection</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
          <LuminousKit />
        </Modal.Body>
      </Modal>
    </>
  );
};

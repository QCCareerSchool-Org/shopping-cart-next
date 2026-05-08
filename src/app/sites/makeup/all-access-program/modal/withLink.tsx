'use client';

import type { FC, MouseEventHandler } from 'react';

import { AllAccessModal } from '.';
import { useToggle } from '@/hooks/useToggle';

export const AllAccessModalWithLink: FC = () => {
  const [ show, toggle ] = useToggle(false);

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
  };

  const handleHide = toggle;

  return (
    <div className="ms-4">
      <a href="#" onClick={handleClick} className="small" style={{ textDecoration: 'none' }}>See What's Included</a>
      <AllAccessModal show={show} onHide={handleHide} />
    </div>
  );
};

'use client';

import type { FC, MouseEventHandler } from 'react';

import { AllAccessModal } from './allAccessModal';
import type { CourseGroup } from '@/domain/courseGroup';
import { useToggle } from '@/hooks/useToggle';

const Popup: FC = () => {
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

export const courseGroups: CourseGroup[] = [
  {
    name: 'Best Value',
    items: [
      {
        code: 'AM',
        name: 'All-Access Program',
        badge: <span className="ms-2 badge bg-primary text-uppercase">Most Popular</span>,
        contents: <Popup />,
      },
    ],
  },
  {
    name: 'Foundation Courses',
    items: [
      {
        code: 'MZ',
        name: 'Master Makeup Artistry',
      },
      {
        code: 'SK',
        name: 'Skincare Consultant',
      },
    ],
  },
  {
    name: 'Specialty Courses',
    items: [
      { code: 'SF', name: 'Special FX Makeup' },
      { code: 'MW', name: 'Pro Makeup Workshop' },
      { code: 'HS', name: 'Hair Styling Essentials' },
      { code: 'AB', name: 'Airbrush Makeup Workshop' },
      { code: 'PW', name: 'Portfolio Development' },
      { code: 'PF', name: 'Personal Styling' },
    ],
  },
];

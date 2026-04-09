'use client';

import type { FC } from 'react';

import { FirstAidIncluded } from './firstAidIncluded';
import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';

export const PetCoursesSubtitleBogoFirstAid: FC = () => {
  const { lt } = useScreenSizeContext();

  return (
    <div className="mb-4" style={{ marginTop: '-0.75rem' }}>
      <div className="text-center text-uppercase mb-2">
        <strong>Save 50%</strong> on each additional course{lt('md') ? <br /> : ' '}of equal or lesser value
      </div>
      <FirstAidIncluded />
    </div>
  );
};

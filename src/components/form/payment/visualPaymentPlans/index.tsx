import type { FC } from 'react';
import { lazy, Suspense } from 'react';

import type { CourseGroup } from '@/domain/courseGroup';
import type { School } from '@/domain/school';
import { useScreenWidth } from '@/hooks/useScreenWidth';

const Desktop = lazy(async () => import('./desktop').then(m => ({ default: m.Desktop })));
const Mobile = lazy(async () => import('./mobile').then(m => ({ default: m.Mobile })));

type Props = {
  date: number;
  school: School;
  discountName?: string;
  courseGroups: CourseGroup[];
};

export const VisualPaymentPlans: FC<Props> = ({ school, date, discountName, courseGroups }) => {
  const screenWidth = useScreenWidth();

  const md = screenWidth >= 768;

  if (screenWidth === 0) {
    return;
  }

  return (
    <Suspense>
      {md ? <Desktop date={date} school={school} discountName={discountName} courseGroups={courseGroups} /> : <Mobile date={date} school={school} discountName={discountName} courseGroups={courseGroups} />}
    </Suspense>
  );
};

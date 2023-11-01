import type { FC } from 'react';
import { lazy, Suspense } from 'react';

// import { Desktop } from './desktop';
// import { Mobile } from './mobile';
import type { School } from '@/domain/school';
import { useScreenWidth } from '@/hooks/useScreenWidth';

const Desktop = lazy(async () => import('./desktop').then(m => ({ default: m.Desktop })));
const Mobile = lazy(async () => import('./mobile').then(m => ({ default: m.Mobile })));

type Props = {
  date: number;
  school: School;
};

export const VisualPaymentPlans: FC<Props> = ({ school, date }) => {
  const screenWidth = useScreenWidth();

  const md = screenWidth >= 768;

  if (screenWidth === 0) {
    return;
  }

  return (
    <Suspense>
      {md ? <Desktop date={date} school={school} /> : <Mobile date={date} school={school} />}
    </Suspense>
  );
};

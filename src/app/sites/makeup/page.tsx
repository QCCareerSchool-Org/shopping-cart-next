import { lazy, Suspense } from 'react';

import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const Makeup20231111 = lazy(async () => import('./_default/2023/11/11').then(m => ({ default: m.Makeup20231111 })));
const MakeupFallback = lazy(async () => import('./_default/fallback').then(m => ({ default: m.MakeupFallback })));

const MakeupPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <Suspense>
      {date >= Date.UTC(2023, 10, 20, 14, 30)
        ? <Makeup20231111 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;

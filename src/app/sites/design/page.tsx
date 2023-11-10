import { lazy, Suspense } from 'react';

import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const Design20231120 = lazy(async () => import('./_default/2023/11/20').then(m => ({ default: m.Design20231120 })));
const DesignFallback = lazy(async () => import('./_default/fallback').then(m => ({ default: m.DesignFallback })));

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <Suspense>
      {date >= Date.UTC(2023, 10, 20, 14, 30) && date < Date.UTC(2023, 10, 30, 5) // November 20, 2023 at 09:30 (14:30 UTC) to November 30, 2023 at 00:00 (05:00 UTC)
        ? <Design20231120 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;

import { lazy, Suspense } from 'react';

import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const Design20231120 = lazy(async () => import('./_default/2023/11/20').then(m => ({ default: m.Design20231120 })));
const DesignFallback = lazy(async () => import('./_default/fallback').then(m => ({ default: m.DesignFallback })));

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <Suspense>
      {date >= Date.UTC(2023, 10, 20, 14, 30)
        ? <Design20231120 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;

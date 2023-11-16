import { lazy, Suspense } from 'react';

import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const WellnessFallback = lazy(async () => import('./_default/fallback').then(m => ({ default: m.WellnessFallback })));

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      <WellnessFallback date={date} />
    </Suspense>
  );
};

export default DesignPage;

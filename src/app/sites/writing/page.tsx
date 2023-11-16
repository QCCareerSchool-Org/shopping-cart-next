import { lazy, Suspense } from 'react';

import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const WritingFallback = lazy(async () => import('./_default/fallback').then(m => ({ default: m.WritingFallback })));

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      <WritingFallback date={date} />
    </Suspense>
  );
};

export default DesignPage;

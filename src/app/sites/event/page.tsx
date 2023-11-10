import { lazy, Suspense } from 'react';

import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const Event20231120 = lazy(async () => import('./_default/2023/11/20').then(m => ({ default: m.Event20231120 })));
const EventFallback = lazy(async () => import('./_default/fallback').then(m => ({ default: m.EventFallback })));

const EventPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date > Date.UTC(2023, 9, 1)
        ? <Event20231120 date={date} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

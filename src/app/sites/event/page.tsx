import { Suspense } from 'react';

import { Event20250806 } from './_carts/2025/08/06';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 7, 6, 12) && date < Date.UTC(2025, 7, 16, 7) // 2025-08-06T08:00 (12:00 UTC) to 2025-08-16T03:00 (07:00 UTC)
        ? <Event20250806 date={date} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

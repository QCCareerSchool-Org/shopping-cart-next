import { Suspense } from 'react';

import { Event20250911 } from './_carts/2025/09/11';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 8, 11, 12) && date < Date.UTC(2025, 8, 21, 7) // 2025-09-11T8:00 (12:00 UTC) to 2025-09-21T03:00 (07:00 UTC)
        ? <Event20250911 date={date} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

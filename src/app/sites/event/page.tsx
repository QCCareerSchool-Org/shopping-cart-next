import { Suspense } from 'react';

import { Event20251007 } from './_carts/2025/10/07';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 9, 7, 12) && date < Date.UTC(2025, 9, 22, 16) // 2025-10-07T08:00 (12:00 UTC) to 2025-10-22T12:00 (16:00 UTC)
        ? <Event20251007 date={date} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

import { Suspense } from 'react';

import { Event20251110 } from './_carts/2025/11/10';
import { Event20251117 } from './_carts/2025/11/17';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 10, 10, 8) && date < Date.UTC(2025, 10, 17, 5) // 2025-11-10T03:00 (08:00 UTC) to 2025-11-17T00:00 (5:00 UTC)
        ? <Event20251110 date={date} />
        : date >= Date.UTC(2025, 10, 17, 5) && date < Date.UTC(2025, 10, 29, 8) // 2025-11-17T00:00 (5:00 UTC) to 2025-11-29T03:00 (8:00 UTC)
          ? <Event20251117 date={date} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

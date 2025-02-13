import { Suspense } from 'react';

import { Event20250206 } from './_carts/2025/02/06';
import { Event20250216 } from './_carts/2025/02/16';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 16, 8) && date < Date.UTC(2025, 1, 23, 8) // 2025-02-16T03:00 (08:00 UTC) to 2025-02-23T03:00 (08:00 UTC)
        ? <Event20250216 date={date} />
        : date >= Date.UTC(2025, 1, 6, 8) && date < Date.UTC(2025, 1, 16, 8) // 2025-02-06T03:00 (08:00 UTC) to 2025-02-16T03:00 (08:00 UTC)
          ? <Event20250206 date={date} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

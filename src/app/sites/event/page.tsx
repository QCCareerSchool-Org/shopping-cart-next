import { Suspense } from 'react';

import { Event20250225 } from './_carts/2025/02/25';
import { Event20250305 } from './_carts/2025/03/05';
import { Event20250312 } from './_carts/2025/03/12';
import { Event20250319 } from './_carts/2025/03/19';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 25, 8) && date < Date.UTC(2025, 2, 1, 8) // 2025-02-25T03:00 (08:00 UTC) to 2025-03-01T03:00 (08:00 UTC)
        ? <Event20250225 date={date} />
        : date >= Date.UTC(2025, 2, 5, 5) && date < Date.UTC(2025, 2, 11, 7) // 2025-03-05T00:00 (05:00 UTC) to 2025-03-11T03:00 (07:00 UTC)
          ? <Event20250305 date={date} />
          : date >= Date.UTC(2025, 2, 12, 12) && date < Date.UTC(2025, 2, 15, 7) // 2025-03-12T08:00 (12:00 UTC) to 2025-03-15T03:00 (07:00 UTC)
            ? <Event20250312 date={date} />
            : date >= Date.UTC(2025, 2, 19, 12) && date < Date.UTC(2025, 2, 27, 7) // 2025-03-19T08:00 (12:00 UTC) to 2025-03-27T03:00 (07:00 UTC)
              ? <Event20250319 date={date} />
              : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

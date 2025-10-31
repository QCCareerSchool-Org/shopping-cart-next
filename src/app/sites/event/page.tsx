import { Suspense } from 'react';

import { Event20251022 } from './_carts/2025/10/22';
import { Event20251103 } from './_carts/2025/11/03';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 9, 22, 4) && date < Date.UTC(2025, 10, 1, 7) // 2025-10-22T00:00 (04:00 UTC) to 2025-11-01T03:00 (07:00 UTC)
        ? <Event20251022 date={date} />
        : date >= Date.UTC(2025, 10, 3, 13) && date < Date.UTC(2025, 10, 8, 8) // 2025-11-03T08:00 (13:00 UTC) to 2025-11-08T03:00 (08:00 UTC)
          ? <Event20251103 date={date} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

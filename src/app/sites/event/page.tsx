import { Suspense } from 'react';

import { Event20251022 } from './_carts/2025/10/22';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 9, 22, 16) && date < Date.UTC(2025, 9, 31, 7) // 2025-10-22T12:00 (16:00 UTC) to 2025-10-31T03:00 (07:00 UTC)
        ? <Event20251022 date={date} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

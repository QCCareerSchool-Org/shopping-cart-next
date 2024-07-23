import { Suspense } from 'react';

import { Event20240724 } from './_carts/2024/07/24';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 6, 24, 13, 30) && date < Date.UTC(2024, 7, 1, 4) // July 24, 2024 at 09:30 (13:30 UTC) to August 1, 2024 at 00:00 (04:00 UTC)
        ? <Event20240724 date={date} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

import { Suspense } from 'react';

import { Event20240606 } from './_carts/2024/06/06';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 5, 6, 13, 30) && date < Date.UTC(2024, 5, 14, 4) // June 6, 2024 at 09:30 (13:30 UTC) to June 14, 2024 at 00:00 (04:00 UTC)
        ? <Event20240606 date={date} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

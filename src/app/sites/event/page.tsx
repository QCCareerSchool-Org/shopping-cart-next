import { Suspense } from 'react';

import { Event20240912 } from './_carts/2024/09/12';
import { Event20240925 } from './_carts/2024/09/25';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 8, 25, 12) && date < Date.UTC(2024, 9, 2, 4) // September 24, 2024 at 08:00 (12:00 UTC) to October 2, 2024 at 00:00 (04:00 UTC)
        ? <Event20240925 date={date} />
        : date >= Date.UTC(2024, 8, 12, 12) && date < Date.UTC(2024, 8, 21, 4) // September 12, 2024 at 08:00 (12:00 UTC) to September 21, 2024 at 00:00 (04:00 UTC)
          ? <Event20240912 date={date} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

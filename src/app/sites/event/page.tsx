import { Suspense } from 'react';

import { Event20231206 } from './_default/2023/12/06';
import { Event20231226 } from './_default/2023/12/26';
import { EventFallback } from './_default/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2023, 11, 26, 14, 30) && date < Date.UTC(2024, 0, 6, 5) // Dec 26, 2023 at 09:30 (14:30 UTC) to Jan 6, 2024 at 00:00 (05:00 UTC)
        ? <Event20231226 date={date} />
        : date >= Date.UTC(2023, 11, 6, 14, 30) && date < Date.UTC(2023, 11, 16, 5) // Dec 6, 2023 at 09:30 (14:30 UTC) to Dec 16, 2023 at 00:00 (05:00 UTC)
          ? <Event20231206 date={date} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

import { Suspense } from 'react';

import { EventStudent20241106 } from './_carts/2024/11/06';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 10, 6, 13) && date < Date.UTC(2024, 10, 13, 5) // November 6, 2024 at 08:00 (13:00 UTC) to Nov 13, 2024 at 00:00 (05:00 UTC)
        ? <EventStudent20241106 date={date} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

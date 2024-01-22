import { Suspense } from 'react';

import { EventStudent20240124 } from './_carts/2024/01/24';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 0, 24, 14, 30) && date < Date.UTC(2024, 1, 1, 5) // Jan 24, 2024 at 09:30 (14:30 UTC) to Feb 1, 2024 at 00:00 (05:00 UTC)
        ? <EventStudent20240124 date={date} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

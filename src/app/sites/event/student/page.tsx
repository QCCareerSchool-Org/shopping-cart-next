import { Suspense } from 'react';

import { EventStudent20241226 } from './_carts/2024/12/26';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 11, 26, 8) && date < Date.UTC(2025, 0, 6, 8) // Dec 26, 2024 at 03:00 (08:00 UTC) to Jan 6, 2025 at 03:00 (08:00 UTC)
        ? <EventStudent20241226 date={date} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

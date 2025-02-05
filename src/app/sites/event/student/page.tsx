import { Suspense } from 'react';

import { EventStudent20250206 } from './_carts/2025/02/06';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 6, 8) && date < Date.UTC(2025, 1, 16, 8) // 2025-02-06T03:00 (08:00 UTC) to 2025-02-16T03:00 (08:00 UTC)
        ? <EventStudent20250206 date={date} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

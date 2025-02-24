import { Suspense } from 'react';

import { EventStudent20250225 } from './_carts/2025/02/25';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 25, 8) && date < Date.UTC(2025, 2, 1, 8) // 2025-02-25T03:00 (08:00 UTC) to 2025-03-01T03:00 (08:00 UTC)
        ? <EventStudent20250225 date={date} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

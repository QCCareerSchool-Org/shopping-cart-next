import { Suspense } from 'react';

import { EventStudent20250327 } from './_carts/2025/03/27';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2025, 3, 3, 7) // 2025-04–03T03:00 (07:00 UTC)
        ? <EventStudent20250327 date={date} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

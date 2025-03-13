import { Suspense } from 'react';

import { EventStudent20250225 } from './_carts/2025/02/25';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2025, 2, 27, 7) // 2025-03-27T03:00 (07:00 UTC)
        ? <EventStudent20250225 date={date} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

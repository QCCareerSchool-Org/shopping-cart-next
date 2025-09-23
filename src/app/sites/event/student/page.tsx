import { Suspense } from 'react';

import { EventStudent20250924 } from './_carts/2025/09/24';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 8, 24, 12) && date < Date.UTC(2025, 9, 1, 7) // 2025-09-24T8:00 (12:00 UTC) to 2025-10-01T03:00 (07:00 UTC)
        ? <EventStudent20250924 date={date} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

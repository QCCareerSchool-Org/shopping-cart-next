import { Suspense } from 'react';

import { EventStudent20251103 } from './_carts/2025/11/03';
import { EventStudent20251108 } from './_carts/2025/11/08';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 10, 3, 13) && date < Date.UTC(2025, 10, 8, 8) // 2025-11-03T08:00 (13:00 UTC) to 2025-11-08T03:00 (08:00 UTC)
        ? <EventStudent20251103 date={date} />
        : date >= Date.UTC(2025, 10, 8, 8) && date < Date.UTC(2025, 10, 15, 8) // 2025-11-08T03:00 (08:00 UTC) to 2025-11-15T03:00 (08:00 UTC)
          ? <EventStudent20251108 date={date} />
          : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

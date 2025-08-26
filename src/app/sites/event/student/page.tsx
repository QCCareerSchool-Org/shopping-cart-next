import { Suspense } from 'react';

import { EventStudent20250820 } from './_carts/2025/08/20';
import { EventStudent20250827 } from './_carts/2025/08/27';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 7, 20, 12) && date < Date.UTC(2025, 7, 27, 12) // 2025-08-20T8:00 (12:00 UTC) to 2025-08-27T08:00 (12:00 UTC)
        ? <EventStudent20250820 date={date} />
        : date >= Date.UTC(2025, 7, 27, 12) && date < Date.UTC(2025, 8, 5, 7) // 2025-08-27T08:00 (12:00 UTC) to 2025-09-05T03:00 (07:00 UTC)
          ? <EventStudent20250827 date={date} />
          : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

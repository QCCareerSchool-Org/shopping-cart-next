import { Suspense } from 'react';

import { EventStudent20240925 } from './_carts/2024/09/25';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 8, 24, 12) && date < Date.UTC(2024, 9, 2, 4) // September 25, 2024 at 08:00 (12:00 UTC) to October 2, 2024 at 00:00 (04:00 UTC)
        ? <EventStudent20240925 date={date} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

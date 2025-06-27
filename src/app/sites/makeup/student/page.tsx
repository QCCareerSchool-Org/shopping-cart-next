import { Suspense } from 'react';

import { MakeupStudent20250701 } from './_carts/2025/07/01';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 6, 1, 12) && date < Date.UTC(2025, 6, 5, 7) // 2025-07-01T08:00 (12:00 UTC) to 2025-07-05T03:00 (07:00 UTC)
        ? <MakeupStudent20250701 date={date} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

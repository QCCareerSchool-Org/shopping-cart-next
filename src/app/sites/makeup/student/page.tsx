import { Suspense } from 'react';

import { MakeupStudent20250723 } from './_carts/2025/07/23';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 6, 23, 12) && date < Date.UTC(2025, 7, 2, 12) // 2025-07-23T08:00 (12:00 UTC) to 2025-08-02T03:00 (12:00 UTC)
        ? <MakeupStudent20250723 date={date} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

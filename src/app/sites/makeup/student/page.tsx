import { Suspense } from 'react';

import { MakeupStudent20250225 } from './_carts/2025/02/25';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2025, 2, 27, 7) // 2025-03-27T03:00 (07:00 UTC)
        ? <MakeupStudent20250225 date={date} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

import { Suspense } from 'react';

import { MakeupStudent20250820 } from './_carts/2025/08/20';
import { MakeupStudent20250827 } from './_carts/2025/08/27';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 7, 20, 12) && date < Date.UTC(2025, 7, 27, 12) // 2025-08-20T8:00 (12:00 UTC) to 2025-08-27T08:00 (12:00 UTC)
        ? <MakeupStudent20250820 date={date} />
        : date >= Date.UTC(2025, 7, 27, 12) && date < Date.UTC(2025, 8, 5, 7) // 2025-08-27T08:00 (12:00 UTC) to 2025-09-05T03:00 (07:00 UTC)
          ? <MakeupStudent20250827 date={date} />
          : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

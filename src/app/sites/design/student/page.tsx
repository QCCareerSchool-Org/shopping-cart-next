import { Suspense } from 'react';

import { DesignStudent20251103 } from './_carts/2025/11/03';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 10, 3, 12) && date < Date.UTC(2025, 10, 8, 7) // 2025-11-03T08:00 (12:00 UTC) to 2025-11-08T03:00 (07:00 UTC)
        ? <DesignStudent20251103 date={date} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;

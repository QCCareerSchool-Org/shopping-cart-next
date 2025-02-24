import { Suspense } from 'react';

import { DesignStudent20250225 } from './_carts/2025/02/25';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 1, 25, 8) && date < Date.UTC(2025, 2, 1, 8) // 2025-02-25T03:00 (08:00 UTC) to 2025-03-01T03:00 (08:00 UTC)
        ? <DesignStudent20250225 date={date} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;

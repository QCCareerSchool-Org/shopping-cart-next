import { Suspense } from 'react';

import { DesignStudent20250327 } from './_carts/2025/03/27';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2025, 3, 3, 7) // 2025-04–03T03:00 (07:00 UTC)
        ? <DesignStudent20250327 date={date} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;

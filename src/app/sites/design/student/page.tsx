import { Suspense } from 'react';

import { DesignStudent20250614 } from './_carts/2025/06/14';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 5, 14, 12) && date < Date.UTC(2025, 5, 17, 7) // 2025-06-14T8:00 (12:00 UTC) to 2025-06-17T03:00 (07:00 UTC)
        ? <DesignStudent20250614 date={date} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;

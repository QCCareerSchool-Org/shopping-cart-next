import { Suspense } from 'react';

import { DesignStudent20251007 } from './_carts/2025/10/07';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 9, 7, 12) && date < Date.UTC(2025, 9, 18, 7) // 2025-10-07T08:00 (12:00 UTC) to 2025-10-18T03:00 (07:00 UTC)
        ? <DesignStudent20251007 date={date} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;

import { Suspense } from 'react';

import { DesignStudent20250522 } from './_carts/2025/05/22';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 4, 22, 7) && date < Date.UTC(2025, 4, 31, 7) // 2025-05-22T03:00 (07:00 UTC) to 2025-05-31T03:00 (07:00 UTC)
        ? <DesignStudent20250522 date={date} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;

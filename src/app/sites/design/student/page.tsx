import { Suspense } from 'react';

import { DesignStudent20241226 } from './_carts/2024/12/26';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 11, 26, 8) && date < Date.UTC(2025, 0, 6, 8) // Dec 26, 2024 at 03:00 (08:00 UTC) to Jan 6, 2025 at 03:00 (08:00 UTC)
        ? <DesignStudent20241226 date={date} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;

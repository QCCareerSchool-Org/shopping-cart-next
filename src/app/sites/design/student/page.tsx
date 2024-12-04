import { Suspense } from 'react';

import { DesignStudent20241115 } from './_carts/2024/11/15';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2024, 1, 7, 8) // Dec 7, 2024 at 03:00 (08:00 UTC)
        ? <DesignStudent20241115 date={date} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;

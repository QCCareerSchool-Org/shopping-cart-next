import { Suspense } from 'react';

import { DesignStudent20241024 } from './_carts/2024/10/24';
import { DesignStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 9, 24, 12) && date < Date.UTC(2024, 10, 2, 4) // October 24, 2024 at 08:00 (12:00 UTC) to Nov 2, 2024 at 00:00 (04:00 UTC)
        ? <DesignStudent20241024 date={date} />
        : <DesignStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignStudentPage;

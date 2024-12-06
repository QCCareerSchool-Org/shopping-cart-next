import { Suspense } from 'react';

import { MakeupStudent20241115 } from './_carts/2024/11/15';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date < Date.UTC(2024, 11, 8, 8) // Dec 8, 2024 at 03:00 (08:00 UTC)
        ? <MakeupStudent20241115 date={date} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

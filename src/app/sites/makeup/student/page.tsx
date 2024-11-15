import { Suspense } from 'react';

import { MakeupStudent20241115 } from './_carts/2024/11/15';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {/* {date < Date.UTC(2024, 10, 30, 8) // November 30, 2024 at 03:00 (08:00 UTC) */}
      {date >= Date.UTC(2024, 10, 6, 13) && date < Date.UTC(2024, 10, 13, 5) // November 6, 2024 at 08:00 (13:00 UTC) to Nov 13, 2024 at 00:00 (05:00 UTC)
        ? <MakeupStudent20241115 date={date} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

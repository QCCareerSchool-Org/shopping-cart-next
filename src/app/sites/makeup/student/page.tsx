import { Suspense } from 'react';

import { MakeupStudent20240420 } from './_carts/2024/04/20';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 3, 20, 13, 30) && date < Date.UTC(2024, 4, 1, 4) // April 20, 2024 at 09:30 (13:30 UTC) to May 1, 2024 at 00:00 (04:00 UTC)
        ? <MakeupStudent20240420 date={date} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

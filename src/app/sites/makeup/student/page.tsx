import { Suspense } from 'react';

import { MakeupStudent20240321 } from './_carts/2024/03/21';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 2, 21, 13, 30) && date < Date.UTC(2024, 3, 1, 4) // March 21, 2024 at 09:30 (13:30 UTC) to April 1, 2024 at 00:00 (04:00 UTC)
        ? <MakeupStudent20240321 date={date} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

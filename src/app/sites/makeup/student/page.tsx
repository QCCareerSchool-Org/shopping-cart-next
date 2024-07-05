import { Suspense } from 'react';

import { MakeupStudent20240619 } from './_carts/2024/06/19';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 5, 19, 13, 30) && date < Date.UTC(2024, 5, 29, 4) // June 19, 2024 at 09:30 (13:30 UTC) to June 29, 2024 at 00:00 (04:00 UTC)
        ? <MakeupStudent20240619 date={date} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

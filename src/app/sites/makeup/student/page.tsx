import { Suspense } from 'react';

import { MakeupStudent20251108 } from './_carts/2025/11/08';
import { MakeupStudent20251129 } from './_carts/2025/11/29';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 10, 17, 5) && date < Date.UTC(2025, 10, 29, 8) // 2025-11-17T00:00 (5:00 UTC) to 2025-11-29T03:00 (8:00 UTC)
        ? <MakeupStudent20251108 date={date} />
        : date >= Date.UTC(2025, 10, 29, 8) && date < Date.UTC(2025, 11, 6, 8) // 2025-11-29T03:00 (8:00 UTC) to 2025-12-06T03:00 (8:00 UTC)
          ? <MakeupStudent20251129 date={date} />
          : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

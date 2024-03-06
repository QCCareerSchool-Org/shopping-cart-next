import { Suspense } from 'react';

import { Makeup20240307 } from './_carts/2024/03/07';
import { MakeupFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 2, 7, 14, 30) && date < Date.UTC(2024, 2, 16, 4) // March 7, 2024 at 09:30 (14:30 UTC) to Mar 16, 2024 at 00:00 (04:00 UTC)
        ? <Makeup20240307 date={date} />
        : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;

import { Suspense } from 'react';

import { Design20240207 } from './_carts/2024/02/07';
import { DesignFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 1, 7, 14, 30) && date < Date.UTC(2024, 1, 15, 5) // Feb 7, 2024 at 09:30 (14:30 UTC) to Feb 15, 2024 at 00:00 (05:00 UTC)
        ? <Design20240207 date={date} />
        : <DesignFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;

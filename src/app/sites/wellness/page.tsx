import { Suspense } from 'react';

import { Wellness20240115 } from './_default/2024/01/15';
import { WellnessFallback } from './_default/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2024, 0, 15, 14, 30) && date < Date.UTC(2024, 0, 20, 5) // Jan 15, 2024 at 09:30 (14:30 UTC) to Jan 20, 2024 at 00:00 (05:00 UTC)
        ? <Wellness20240115 date={date} />
        : <WellnessFallback date={date} />
      }
    </Suspense>
  );
};

export default DesignPage;

import { Suspense } from 'react';

import { Makeup20231206 } from './_default/2023/12/06';
import { Makeup20231226 } from './_default/2023/12/26';
import { MakeupFallback } from './_default/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const MakeupPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2023, 11, 26, 14, 30) && date < Date.UTC(2024, 0, 6, 5) // Dec 26, 2023 at 09:30 (14:30 UTC) to Jan 6, 2024 at 00:00 (05:00 UTC)
        ? <Makeup20231226 date={date} />
        : date >= Date.UTC(2023, 11, 6, 14, 30) && date < Date.UTC(2023, 11, 16, 5) // Dec 6, 2023 at 09:30 (14:30 UTC) to Dec 16, 2023 at 00:00 (05:00 UTC)
          ? <Makeup20231206 date={date} />
          : <MakeupFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupPage;

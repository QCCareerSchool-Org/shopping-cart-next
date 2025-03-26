import { Suspense } from 'react';

import { Pet20250319 } from './_carts/2025/03/19';
import { Pet20250327 } from './_carts/2025/03/27';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 2, 19, 12) && date < Date.UTC(2025, 2, 27, 7) // 2025-03-19T08:00 (12:00 UTC) to 2025-03-27T03:00 (07:00 UTC)
        ? <Pet20250319 date={date} />
        : date >= Date.UTC(2025, 2, 27, 7) && date < Date.UTC(2025, 3, 3, 7) // 2025-03-27T03:00 (07:00 UTC) to 2025-04-03T03:00 (07:00 UTC)
          ? <Pet20250327 date={date} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;

import { Suspense } from 'react';

import { Pet20250806 } from './_carts/2025/08/06';
import { Pet20250820 } from './_carts/2025/08/20';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 7, 20, 12) && date < Date.UTC(2025, 7, 26, 7) // 2025-08-20T8:00 (12:00 UTC) to 2025-08-26T03:00 (07:00 UTC)
        ? <Pet20250820 date={date} />
        : date >= Date.UTC(2025, 7, 6, 12) && date < Date.UTC(2025, 7, 16, 7) // 2025-08-06T08:00 (12:00 UTC) to 2025-08-16T03:00 (07:00 UTC)
          ? <Pet20250806 date={date} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;

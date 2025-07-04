import { Suspense } from 'react';

import { Pet20250701 } from './_carts/2025/07/01';
import { Pet20250710 } from './_carts/2025/07/10';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 6, 10, 12) && date < Date.UTC(2025, 6, 19, 7) // 2025-07-10T08:00 (12:00 UTC) to 2025-07-19T03:00 (07:00 UTC)
        ? <Pet20250710 date={date} />
        : date >= Date.UTC(2025, 6, 1, 12) && date < Date.UTC(2025, 6, 7, 12) // 2025-07-01T08:00 (12:00 UTC) to 2025-07-07T08:00 (12:00 UTC)
          ? <Pet20250701 date={date} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;

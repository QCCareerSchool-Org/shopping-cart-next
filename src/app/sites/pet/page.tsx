import { Suspense } from 'react';

import { Pet20250620 } from './_carts/2025/06/20';
import { Pet20250701 } from './_carts/2025/07/01';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 6, 1, 12) && date < Date.UTC(2025, 6, 5, 7) // 2025-07-01T08:00 (12:00 UTC) to 2025-07-05T03:00 (07:00 UTC)
        ? <Pet20250701 date={date} />
        : date >= Date.UTC(2025, 5, 20, 7) && date < Date.UTC(2025, 6, 1, 7) // 2025-05-20T03:00 (07:00 UTC) to 2025-06-01T03:00 (07:00 UTC)
          ? <Pet20250620 date={date} />
          : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;

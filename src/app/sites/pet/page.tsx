import { Suspense } from 'react';

import { Pet20251211 } from './_carts/2025/12/11';
import { PetFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      { date >= Date.UTC(2025, 11, 11, 8) && date < Date.UTC(2025, 11, 20, 8) // 2025-12-11T03:00 (8:00 UTC) to 2025-12-20T03:00 (8:00 UTC)
        ? <Pet20251211 date={date} />
        : <PetFallback date={date} />
      }
    </Suspense>
  );
};

export default PetPage;

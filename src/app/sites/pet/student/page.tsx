import { Suspense } from 'react';

import { PetStudent20251226 } from './_carts/2025/12/26';
import { PetStudent20260107 } from './_carts/2026/01/07';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      { date >= Date.UTC(2025, 11, 26, 8) && date < Date.UTC(2026, 0, 3, 8) // 2025-12-26T03:00 (8:00 UTC) to 2026-01-03T03:00 (8:00 UTC)
        ? <PetStudent20251226 date={date} />
        : date >= Date.UTC(2026, 0, 7, 8) && date < Date.UTC(2026, 0, 17, 8) // 2026-01-07T03:00 (8:00 UTC) to 2026-01-17T03:00 (8:00 UTC)
          ? <PetStudent20260107 date={date} />
          : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;

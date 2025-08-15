import { Suspense } from 'react';

import { PetStudent20250820 } from './_carts/2025/08/20';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 7, 20, 12) && date < Date.UTC(2025, 7, 26, 7) // 2025-08-20T8:00 (12:00 UTC) to 2025-08-26T03:00 (07:00 UTC)
        ? <PetStudent20250820 date={date} />
        : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;

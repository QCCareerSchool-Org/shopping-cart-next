import { Suspense } from 'react';

import { PetStudent20250522 } from './_carts/2025/05/22';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 4, 22, 7) && date < Date.UTC(2025, 4, 31, 7) // 2025-05-22T03:00 (07:00 UTC) to 2025-05-31T03:00 (07:00 UTC)
        ? <PetStudent20250522 date={date} />
        : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;

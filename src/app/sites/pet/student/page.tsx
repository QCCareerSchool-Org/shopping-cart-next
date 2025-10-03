import { Suspense } from 'react';

import { PetStudent20251007 } from './_carts/2025/10/07';
import { PetStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const PetStudentPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {date >= Date.UTC(2025, 9, 7, 12) && date < Date.UTC(2025, 9, 18, 7) // 2025-10-07T08:00 (12:00 UTC) to 2025-10-18T03:00 (07:00 UTC)
        ? <PetStudent20251007 date={date} />
        : <PetStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default PetStudentPage;

import { Suspense } from 'react';

import { MakeupStudent20260401 } from './_carts/2026/04/01';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { april1 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {april1.contains(date)
        ? <MakeupStudent20260401 date={date} period={april1.toDTO()} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

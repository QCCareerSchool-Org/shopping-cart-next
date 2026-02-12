import { Suspense } from 'react';

import { MakeupStudent20260213 } from './_carts/2026/02/13';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb13 } from '@/lib/period/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb13.contains(date)
        ? <MakeupStudent20260213 date={date} period={feb13.toDTO()} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

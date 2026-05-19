import { Suspense } from 'react';

import { MakeupStudent20260519 } from './_carts/2026/05/19';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { may16 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {may16.contains(date)
        ? <MakeupStudent20260519 date={date} period={may16.toDTO()} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

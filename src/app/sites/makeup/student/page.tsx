import { Suspense } from 'react';

import { MakeupStudent20260814 } from './_carts/2026/08/14';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august14 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august14.contains(date)
        ? <MakeupStudent20260814 date={date} period={august14.toDTO()} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

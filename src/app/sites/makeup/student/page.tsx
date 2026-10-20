import { Suspense } from 'react';

import { MakeupStudent20261021 } from './_carts/2026/10/21';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { october21 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october21.contains(date)
        ? <MakeupStudent20261021 date={date} period={october21.toDTO()} />
        : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

import { Suspense } from 'react';

import { MakeupStudent20261021 } from './_carts/2026/10/21';
import { MakeupStudent20261104 } from './_carts/2026/11/04';
import { MakeupStudent20261116 } from './_carts/2026/11/16';
import { MakeupStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { november04, november16, october21 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const MakeupStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october21.contains(date)
        ? <MakeupStudent20261021 date={date} period={october21.toDTO()} />
        : november04.contains(date)
          ? <MakeupStudent20261104 date={date} period={november04.toDTO()} />
          : november16.contains(date)
            ? <MakeupStudent20261116 date={date} period={november16.toDTO()} />
            : <MakeupStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default MakeupStudentPage;

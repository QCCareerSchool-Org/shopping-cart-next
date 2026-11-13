import { Suspense } from 'react';

import { EventStudent20261021 } from './_carts/2026/10/21';
import { EventStudent20261104 } from './_carts/2026/11/04';
import { EventStudent20261116 } from './_carts/2026/11/16';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { november04, november16, october21 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october21.contains(date)
        ? <EventStudent20261021 date={date} period={october21.toDTO()} />
        : november04.contains(date)
          ? <EventStudent20261104 date={date} period={november04.toDTO()} />
          : november16.contains(date)
            ? <EventStudent20261116 date={date} period={november16.toDTO()} />
            : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

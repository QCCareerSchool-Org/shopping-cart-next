import { Suspense } from 'react';

import { EventStudent20260213 } from './_carts/2026/02/13';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb13 } from '@/lib/periods';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb13.contains(date)
        ? <EventStudent20260213 date={date} period={feb13.toObject()} />
        : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

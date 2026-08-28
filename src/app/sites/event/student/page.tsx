import { Suspense } from 'react';

import { EventStudent20260814 } from './_carts/2026/08/14';
import { EventStudent20260909 } from './_carts/2026/09/09';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august26, september09 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {september09.contains(date)
        ? <EventStudent20260909 date={date} period={september09.toDTO()} />
        :
        august26.contains(date)
          ? <EventStudent20260814 date={date} period={august26.toDTO()} />
          : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

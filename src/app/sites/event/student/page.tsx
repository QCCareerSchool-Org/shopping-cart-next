import { Suspense } from 'react';

import { EventStudent20260814 } from './_carts/2026/08/14';
import { EventStudent20260826 } from './_carts/2026/08/26';
import { EventStudentFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august14, august26 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventStudentPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august26.contains(date)
        ? <EventStudent20260826 date={date} period={august26.toDTO()} />
        :
        august14.contains(date)
          ? <EventStudent20260814 date={date} period={august14.toDTO()} />
          : <EventStudentFallback date={date} />
      }
    </Suspense>
  );
};

export default EventStudentPage;

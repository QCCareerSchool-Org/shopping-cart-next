import { Suspense } from 'react';

import { Event20260923 } from './_carts/2026/09/23';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { september23 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {september23.contains(date)
        ? <Event20260923 date={date} period={september23.toDTO()} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

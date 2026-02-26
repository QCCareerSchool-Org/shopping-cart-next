import { Suspense } from 'react';

import { Event20260219 } from './_carts/2026/02/19';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { feb19 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {feb19.contains(date)
        ? <Event20260219 date={date} period={feb19.toDTO()} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

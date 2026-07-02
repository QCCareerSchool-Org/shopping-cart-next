import { Suspense } from 'react';

import { Event20260516 } from './_carts/2026/05/16';
import { Event20260627 } from './_carts/2026/06/27';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { july10, june27 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {july10.contains(date)
        ? <Event20260516 date={date} period={july10.toDTO()} />
        : (june27.contains(date))
          ? <Event20260627 date={date} period={june27.toDTO()} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

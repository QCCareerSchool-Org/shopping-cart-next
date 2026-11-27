import { Suspense } from 'react';

import { Event20261116 } from './_carts/2026/11/16';
import { Event20261128 } from './_carts/2026/11/28';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { november16, november28 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {november28.contains(date)
        ? <Event20261128 date={date} period={november28.toDTO()} />
        : november16.contains(date)
          ? <Event20261116 date={date} period={november16.toDTO()} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

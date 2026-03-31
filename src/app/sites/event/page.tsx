import { Suspense } from 'react';

import { Event20260401 } from './_carts/2026/04/01';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { april1 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {april1.contains(date)
        ? <Event20260401 date={date} period={april1.toDTO()} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

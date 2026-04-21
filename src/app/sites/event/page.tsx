import { Suspense } from 'react';

import { Event20260422 } from './_carts/2026/04/22';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { april22 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {april22.contains(date)
        ? <Event20260422 date={date} period={april22.toDTO()} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

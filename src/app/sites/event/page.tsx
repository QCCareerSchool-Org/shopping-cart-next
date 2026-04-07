import { Suspense } from 'react';

import { Event20260409 } from './_carts/2026/04/09';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { april9 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {april9.contains(date)
        ? <Event20260409 date={date} period={april9.toDTO()} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

import { Suspense } from 'react';

import { Event20260304 } from './_carts/2026/03/04';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { mar04 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {mar04.contains(date)
        ? <Event20260304 date={date} period={mar04.toDTO()} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

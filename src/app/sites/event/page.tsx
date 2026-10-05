import { Suspense } from 'react';

import { Event20261007 } from './_carts/2026/10/07';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { october07 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {october07.contains(date)
        ? <Event20261007 date={date} period={october07.toDTO()} />
        : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

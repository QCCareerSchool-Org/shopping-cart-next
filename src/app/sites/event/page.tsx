import { Suspense } from 'react';

import { Event20260826 } from './_carts/2026/08/26';
import { Event20260909 } from './_carts/2026/09/09';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august26, september09 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {september09.contains(date)
        ? <Event20260909 date={date} period={september09.toDTO()} />
        : (august26.contains(date))
          ? <Event20260826 date={date} period={august26.toDTO()} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

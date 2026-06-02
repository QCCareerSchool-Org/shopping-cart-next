import { Suspense } from 'react';

import { Event20260516 } from './_carts/2026/05/16';
import { Event20260603 } from './_carts/2026/06/03';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { june03, may16 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {june03.contains(date)
        ? <Event20260603 date={date} period={june03.toDTO()} />
        : may16.contains(date)
          ? <Event20260516 date={date} period={may16.toDTO()} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

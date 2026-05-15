import { Suspense } from 'react';

import { Event20260304 } from './_carts/2026/03/04';
import { Event20260506 } from './_carts/2026/05/06';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { may06, may16 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {may16.contains(date)
        ? <Event20260304 date={date} period={may16.toDTO()} />
        : may06.contains(date)
          ? <Event20260506 date={date} period={may06.toDTO()} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

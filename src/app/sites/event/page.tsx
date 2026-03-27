import { Suspense } from 'react';

import { Event20260304 } from './_carts/2026/03/04';
import { Event20260318 } from './_carts/2026/03/18';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { mar04, mar04extended, mar18, mar18extended } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {mar18extended.contains(date)
        ? <Event20260318 date={date} period={mar18extended.toDTO()} />
        : mar18.contains(date)
          ? <Event20260318 date={date} period={mar18.toDTO()} />
          : mar04.contains(date)
            ? <Event20260304 date={date} period={mar04.toDTO()} />
            : mar04extended.contains(date)
              ? <Event20260304 date={date} period={mar04extended.toDTO()} />
              : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

import { Suspense } from 'react';

import { Event20260603 } from './_carts/2026/06/03';
import { Event20260806 } from './_carts/2026/08/06';
import { EventFallback } from './_carts/fallback';
import { getDate } from '@/lib/getDate';
import { august06, july22 } from '@/periods';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);

  return (
    <Suspense>
      {august06.contains(date)
        ? <Event20260806 date={date} period={august06.toDTO()} />
        : (july22.contains(date))
          ? <Event20260603 date={date} period={july22.toDTO()} />
          : <EventFallback date={date} />
      }
    </Suspense>
  );
};

export default EventPage;

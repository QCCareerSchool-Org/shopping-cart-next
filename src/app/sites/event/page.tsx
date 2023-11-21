import { lazy } from 'react';

import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

// const Event20231120 = lazy(async () => import('./_default/2023/11/20').then(m => ({ default: m.Event20231120 })));
const EventFallback = lazy(async () => import('./_default/fallback').then(m => ({ default: m.EventFallback })));

const EventPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  return <EventFallback date={date} />;

  // return (
  //   <Suspense>
  //     {date >= Date.UTC(2023, 10, 20, 14, 30) && date < Date.UTC(2023, 10, 30, 5) // November 20, 2023 at 09:30 (14:30 UTC) to November 30, 2023 at 00:00 (05:00 UTC)
  //       ? <Event20231120 date={date} />
  //       : <EventFallback date={date} />
  //     }
  //   </Suspense>
  // );
};

export default EventPage;

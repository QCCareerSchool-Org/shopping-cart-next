import { Event202310 } from './_default/2023/10';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  if (date > Date.UTC(2023, 9, 1)) {
    return <Event202310 date={date} />;
  }
};

export default EventPage;

import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  console.log(date);
  return (
    <h1>Event</h1>
  );
};

export default EventPage;

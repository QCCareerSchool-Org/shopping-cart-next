import { getDate } from '@/lib/getDate';
import type { ServerComponent } from '@/serverComponent';

const EventPage: ServerComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  console.log(date);
  return (
    <h1>Event</h1>
  );
};

export default EventPage;

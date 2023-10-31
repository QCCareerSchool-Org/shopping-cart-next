import { Design202310 } from './_default/2023/10';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);

  if (date > Date.UTC(2023, 9, 1)) {
    return <Design202310 date={date} />;
  }
};

export default DesignPage;

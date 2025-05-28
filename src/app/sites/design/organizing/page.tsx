import { DesignOrganizingInner } from './inner';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignOrganizingPage: PageComponent = async ({ searchParams }) => {
  const date = await getDate(searchParams.date);
  return <DesignOrganizingInner date={date} />;
};

export default DesignOrganizingPage;

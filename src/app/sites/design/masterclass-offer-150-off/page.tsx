import { DesignMasterclass150OffInner } from './inner';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignMasterclass150OffPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return <DesignMasterclass150OffInner date={date} />;
};

export default DesignMasterclass150OffPage;

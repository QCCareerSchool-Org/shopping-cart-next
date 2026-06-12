import { AllAccessForm } from './form';
import { AllAccessPromo } from './promo';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const AllAccessPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <>
      <AllAccessPromo />
      <AllAccessForm date={date} />
    </>
  );
};

export default AllAccessPage;

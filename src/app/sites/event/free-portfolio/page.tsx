import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { EventFreePortfolioPromo } from './promo';
import { Form } from '@/components/form';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const EventFreePortfolioPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const date = await getDate(searchParams.date);
  return (
    <>
      <EventFreePortfolioPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={Guarantee}
        successLink="https://www.qceventplanning.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="HIDE"
        visualPaymentPlans
        promoCodeDefault="PORTFOLIO"
      />
    </>
  );
};

export default EventFreePortfolioPage;

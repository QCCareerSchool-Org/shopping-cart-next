import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { DesignFreePortfolioPromo } from './promo';
import { Form } from '@/components/form';
import type { PageComponent } from '@/serverComponent';

type Props = {
  date: number;
};

const DesignFreePortfolioPage: PageComponent<Props> = ({ date }) => {
  return (
    <>
      <DesignFreePortfolioPromo />
      <Form
        date={date}
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="PORTFOLIO"
      />
    </>
  );
};

export default DesignFreePortfolioPage;

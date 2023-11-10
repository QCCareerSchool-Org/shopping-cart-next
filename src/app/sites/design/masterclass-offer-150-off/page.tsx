import { agreementLinks } from '../agreementLinks';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../guarantee';
import { DesignMasterclass150OffPromo } from './promo';
import { Form } from '@/components/form';
import type { PageComponent } from '@/serverComponent';

type Props = {
  date: number;
};

// only show I2, MS, PO, and DB
const filteredCourseGroups = [
  ...courseGroups.map(g => ({
    ...g,
    items: g.items.filter(c => [ 'I2', 'MS', 'PO', 'DB' ].includes(c.code)),
  })),
];

// add the alwaysShow flag to MS
for (const group of filteredCourseGroups) {
  const ms = group.items.find(i => i.code === 'MS');
  if (ms) {
    ms.alwaysShown = true;
  }
}

const DesignMasterclass150OffPage: PageComponent<Props> = ({ date }) => {
  return (
    <>
      <DesignMasterclass150OffPromo />
      <Form
        date={date}
        courseGroups={filteredCourseGroups}
        showHiddenCourses
        school="QC Design School"
        guarantee={Guarantee}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
        visualPaymentPlans
        promoCodeDefault="MASTERCLASS150"
      />
    </>
  );
};

export default DesignMasterclass150OffPage;

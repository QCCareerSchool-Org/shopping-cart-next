import { agreementLinks } from './agreementLinks';
import { courseGroups } from './courseGroups';
import { Form } from '@/components/form';
import { Section } from '@/components/section';
import { getDate } from '@/lib/getDate';
import type { PageComponent } from '@/serverComponent';

const DesignPage: PageComponent = ({ searchParams }) => {
  const date = getDate(searchParams.date);
  return (
    <>
      <Section>
        Design
      </Section>
      <Form
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={null}
        successLink="https://www.qcdesignschool.com/welcome-to-the-school"
        agreementLinks={agreementLinks}
        dynamicCourseDescriptions="SHOW"
      />
    </>
  );
};

export default DesignPage;

import { Resume } from '@/app/resume';
import type { PageComponent } from '@/serverComponent';

const ResumePage: PageComponent = props => (
  <Resume {...props} />
);

export default ResumePage;

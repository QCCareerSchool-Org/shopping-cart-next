import { Card, CardBody } from 'react-bootstrap';

import { Banner } from './banner';
import { Certification } from './certification';
import { getCertificationName } from './certificationName';
import { getCourseCardDescription } from './descriptions';
import { Kit } from './kit';
import { usePriceState } from '@/hooks/usePriceState';
import { useScreenWidth } from '@/hooks/useScreenWidth';

interface Props {
  courseCode: string;
  name: string;
}

const bannerCertifications = [ 'MZ', 'AB', 'HS', 'MW', 'SF', 'SK' ];

export const CourseCard: React.FC<Props> = ({ courseCode, name }) => {
  const priceState = usePriceState();
  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  const description = getCourseCardDescription(courseCode);

  const certificationName = getCertificationName(courseCode);

  if (!priceState || !description) {
    return;
  }

  return (
    <Card>
      <CardBody>
        {courseCode && bannerCertifications.includes(courseCode)
          ? (
            <>
              <div style={{ margin: '-1rem -1rem 1rem -1rem' }}>
                <Banner courseCode={courseCode} />
              </div>
              <h2 className="h3 mb-2 text-start">{name}</h2>
            </>
          )
          : (
            <div className="d-flex align-items-center mb-3">
              <Certification courseCode={courseCode} />
              <div>
                <h4 className="m-0">{name}</h4>
                {certificationName && lgOrGreater && <span>{certificationName}</span>}
              </div>
            </div>
          )
        }
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <Kit courseCode={courseCode} />
      </CardBody>
    </Card>
  );
};

import type { FC } from 'react';
import { Fragment, useState } from 'react';

import { CheckBox } from './checkBox';
import { CourseCard } from './courseCard';
import { CourseTable } from './courseTable';
import type { DynamicCourseDescriptions } from '@/components/form';
import { Section } from '@/components/section';
import type { CourseGroup } from '@/domain/courseGroup';
import { useCoursesDispatch } from '@/hooks/useCoursesDispatch';
import { useCoursesState } from '@/hooks/useCoursesState';
import { usePriceState } from '@/hooks/usePriceState';

type Props = {
  courseGroups: CourseGroup[];
  internal: boolean;
  coursesSubtitle?: FC;
  dynamicCourseMessages?: FC[];
  coursesOverride: boolean;
  dynamicCourseDescriptions?: DynamicCourseDescriptions;
  discountName?: string;
};

export const CourseSelection: FC<Props> = props => {
  return (
    <Section className="coursesSection">
      {props.coursesOverride ? <Override {...props} /> : <Standard {...props} />}
    </Section>
  );
};

const Standard: FC<Props> = props => {
  const coursesState = useCoursesState();
  const coursesDispatch = useCoursesDispatch();
  const priceState = usePriceState();

  const [ hoveredCourseCode, setHoveredCourseCode ] = useState<string | undefined>();

  const handleMouseOver = (code: string): void => {
    setHoveredCourseCode(code);
  };

  let hoveredCourseName: string | undefined;
  for (const group of props.courseGroups) {
    for (const item of group.items) {
      if (item.code === hoveredCourseCode) {
        hoveredCourseName = item.name;
        break;
      }
    }
  }

  const handleCheck = (courseCode: string): void => {
    const isAvailable = props.courseGroups.some(g => g.items.some(i => i.code === courseCode));
    if (isAvailable) {
      coursesDispatch({ type: 'ADD_COURSE', payload: { courseCode } });
    }
  };

  const handleUncheck = (courseCode: string): void => {
    coursesDispatch({ type: 'REMOVE_COURSE', payload: { courseCode } });
  };

  return (
    <div className="row">
      <h2 className="h1">Choose Your Courses</h2>
      {props.coursesSubtitle && <props.coursesSubtitle />}
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0">
        {/* {enrollmentErrors.courses && (
          <div className="alert alert-danger">
            <h6>Incomplete Form</h6>
            <p className="mb-0">Please select one or more courses.</p>
          </div>
        )} */}
        {props.courseGroups.map((g, i) => (
          <Fragment key={i}>
            {g.name && <h3 className={i > 0 ? 'mt-4 h5' : 'h5'}>{g.name}</h3>}
            {g.items.filter(c => !coursesState.hidden.includes(c.code) || c.alwaysShown).map(c => <CheckBox key={c.code} course={c} onCheck={handleCheck} onUncheck={handleUncheck} internal={props.internal} onMouseOver={() => handleMouseOver(c.code)} />)}
          </Fragment>
        ))}
        {!!priceState && props.dynamicCourseDescriptions === 'SHOW' && <div className="mt-4"><CourseTable discountName={props.discountName} /></div>}
      </div>
      {(props.dynamicCourseDescriptions === 'SHOW' || props.dynamicCourseDescriptions === 'REPLACE') && hoveredCourseCode && hoveredCourseName
        ? (
          <div className="d-none d-md-block col-12 col-md-6">
            <CourseCard courseCode={hoveredCourseCode} name={hoveredCourseName} />
          </div>
        )
        : (
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 mt-4 mt-md-0">
            {!!priceState && <CourseTable discountName={props.discountName} />}
          </div>
        )
      }
    </div>
  );
};

const Override: FC<Props> = props => {
  const priceState = usePriceState();

  return (
    <div className="row">
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        {!!priceState && <CourseTable discountName={props.discountName} />}
      </div>
    </div>
  );
};

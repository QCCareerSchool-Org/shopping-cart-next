import { useId } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

import { DisabledCourseModal } from './disabledCourseModal';
import type { Course } from '@/domain/course';
import { useCoursesState } from '@/hooks/useCoursesState';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useToggle } from '@/hooks/useToggle';

type Props = {
  course: Course;
  onMouseOver?: () => void;
  onCheck: (courseCode: string) => void;
  onUncheck: (courseCode: string) => void;
};

export const CheckBox: React.FC<Props> = props => {
  const id = useId();
  const coursesState = useCoursesState();
  // const coursesDispatch = useCoursesDispatch();
  const screenWidth = useScreenWidth();
  const [ showDisabledMessage, toggleDisabledMessage ] = useToggle(false);

  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      props.onCheck(props.course.code);
    } else {
      props.onUncheck(props.course.code);
    }
  };

  const handleToggle = (): void => {
    toggleDisabledMessage();
  };

  const disabled = coursesState.disabled.includes(props.course.code);

  return (
    <div className="form-check mt-2">
      <input
        type="checkbox"
        className="form-check-input"
        id={`${id}${props.course.code}`}
        checked={coursesState.selected.includes(props.course.code)}
        disabled={disabled}
        onChange={handleCourseChange}
        onMouseOver={props.onMouseOver}
      />
      <label className={'form-check-label' + (disabled ? ' text-medium' : '')} htmlFor={`${id}${props.course.code}`} onMouseOver={props.onMouseOver}>
        {props.course.description
          ? <><strong>{props.course.description}:</strong><br />{props.course.name}</>
          : props.course.name
        }
        {props.course.disabledMessage && disabled && (
          <button type="button" className="btn btn-link p-0 ms-2 btn-no-hover-shadow" style={{ height: '1rem' }} onClick={handleToggle}>
            <FaQuestionCircle style={{ verticalAlign: 0, position: 'relative', top: -3 }} />
          </button>
        )}
      </label>
      {screenWidth >= 375 && props.course.badge}
      {props.course.disabledMessage && <DisabledCourseModal course={props.course.code} name={props.course.name} message={props.course.disabledMessage} show={showDisabledMessage} onHide={handleToggle} />}
    </div>
  );
};

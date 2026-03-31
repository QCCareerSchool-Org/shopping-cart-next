'use client';

import type { FC, JSX, MouseEventHandler } from 'react';
import { useId, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';

import styles from './checkBox.module.css';
import { DisabledCourseModal } from './disabledCourseModal';
import type { Course } from '@/domain/course';
import { useAddressState } from '@/hooks/useAddressState';
import { useCoursesState } from '@/hooks/useCoursesState';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  course: Course;
  onMouseOver?: () => void;
  onCheck: (courseCode: string) => void;
  onUncheck: (courseCode: string) => void;
}

export const CheckBox: FC<Props> = props => {
  const id = useId();
  const coursesState = useCoursesState();
  const { countryCode, provinceCode } = useAddressState();
  // const coursesDispatch = useCoursesDispatch();
  const screenWidth = useScreenWidth();
  const [ showDisabledMessage, toggleDisabledMessage ] = useToggle(false);

  const [ expanded, setExpanded ] = useState(false);

  const handleClick: MouseEventHandler = ev => {
    ev.preventDefault();
    setExpanded(e => !e);
  };

  const handleHide = () => {
    setExpanded(false);
  };

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

  const name = typeof props.course.name === 'function'
    ? props.course.name({ countryCode, provinceCode })
    : props.course.name;

  let disabledMessage: string | JSX.Element | undefined;

  if (typeof props.course.disabledMessage === 'function') {
    disabledMessage = props.course.disabledMessage({ countryCode, provinceCode });
  } else if (typeof props.course.disabledMessage !== 'undefined') {
    disabledMessage = props.course.disabledMessage;
  }

  return (
    <>
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
        <label className="form-check-label" htmlFor={`${id}${props.course.code}`} style={{ opacity: 1 }} onMouseOver={props.onMouseOver}>
          <span style={disabled ? { opacity: 0.5 } : undefined}>
            {props.course.description
              ? <><strong>{props.course.description}:</strong><br />{name}</>
              : name
            }
          </span>
          {props.course.disabledMessage && disabled && (
            <button type="button" className="btn btn-link p-0 ms-2 btn-no-hover-shadow" style={{ height: '1rem' }} onClick={handleToggle}>
              <FaQuestionCircle style={{ verticalAlign: 0, position: 'relative', top: -3 }} />
            </button>
          )}
        </label>
        {screenWidth >= 375 && props.course.badge}
        {disabledMessage && <DisabledCourseModal course={props.course.code} name={name} message={disabledMessage} show={showDisabledMessage} onHide={handleToggle} />}
      </div>
      {props.course.contents && (
        <div className="ms-4">
          <a href="#" onClick={handleClick} className="small" style={{ textDecoration: 'none' }}>See What's Included</a>
          <Modal size={props.course.contents.modalSize} show={expanded} onHide={handleHide}>
            <Modal.Header closeButton><h3 className="h5 mb-0">{props.course.contents.heading}</h3></Modal.Header>
            <Modal.Body className={styles.noMarginBottom}>
              {props.course.contents.body}
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

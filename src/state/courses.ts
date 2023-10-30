export type CoursesState = {
  selected: string[];
  disabled: string[];
  hidden: string[];
};

export type CoursesAction =
  | { type: 'CLEAR_COURSES' }
  | { type: 'ADD_COURSE'; payload: { courseCode: string } }
  | { type: 'REMOVE_COURSE'; payload: { courseCode: string } };

export const initialCoursesState: CoursesState = {
  selected: [],
  disabled: [],
  hidden: [ 'MS' ],
};

export const coursesReducer = (state: CoursesState, action: CoursesAction): CoursesState => {
  switch (action.type) {
    case 'CLEAR_COURSES': {
      return {
        ...state,
        selected: [],
        disabled: disabledCourses([]), // recalculate which courses are disabled,
        hidden: hiddenCourses([]), // recalculate which courses are hidden,
      };
    }
    case 'ADD_COURSE': {
      const courseCode = convert(action.payload.courseCode);
      // a course can only be selected if it's not hidden, not disabled, and not already selected
      const isDisabled = state.disabled.includes(courseCode);
      const isHidden = state.hidden.includes(courseCode);
      const isSelected = state.selected.includes(courseCode);
      if (!isDisabled && !isHidden && !isSelected) {
        const selected = [ ...state.selected, courseCode ]; // add the course
        return {
          ...state,
          selected,
          disabled: disabledCourses(selected), // recalculate which courses are disabled
          hidden: hiddenCourses(selected), // recalculate which courses are hidden
        };
      }
      return state; // no change
    }
    case 'REMOVE_COURSE': {
      const courseCode = convert(action.payload.courseCode);
      if (state.selected.includes(courseCode)) {
        // remove the course
        let selected = state.selected.filter(c => c !== courseCode);
        // also remove MS if I2 is being removed
        if (!selected.includes('I2')) {
          selected = selected.filter(c => c !== 'MS');
        }
        return {
          ...state,
          selected,
          disabled: disabledCourses(selected), // recalculate which courses are disabled
          hidden: hiddenCourses(selected), // recalculate which courses are hidden
        };
      }
      return state; // no change
    }
  }
};

const convert = (course: string): string => {
  if (course.toUpperCase() === 'MM') {
    return 'MZ';
  } else if (course.toUpperCase() === 'MA') {
    return 'MK';
  }
  return course.toUpperCase();
};

/**
 * Returns an array indicating which courses should be disabled based on which courses are selected
 * @param selectedCourses which courses are selected
 */
const disabledCourses = (selectedCourses: string[]): string[] => {
  const result = [];
  /* design */
  if (!selectedCourses.includes('I2')) {
    result.push('MS');
  }
  if (selectedCourses.includes('I2') || selectedCourses.includes('MS')) {
    result.push('ST');
  }
  if (selectedCourses.includes('ST')) {
    result.push('I2');
    result.push('MS');
  }
  /* event */
  if (selectedCourses.includes('EP')) {
    result.push('WP', 'CE');
  }
  if (selectedCourses.includes('WP')) {
    result.push('EP', 'CE');
  }
  if (selectedCourses.includes('CE')) {
    result.push('EP', 'WP');
  }
  /* makeup */
  if (selectedCourses.includes('MM') || selectedCourses.includes('MZ')) {
    result.push('MA', 'MK', 'PA');
  }
  if (selectedCourses.includes('MA') || selectedCourses.includes('MK')) {
    result.push('MM', 'MZ', 'PA');
  }
  if (selectedCourses.includes('PA')) {
    result.push('MM', 'MZ', 'MA', 'MK', 'MW', 'SK', 'GB', 'PW');
  }
  if (selectedCourses.includes('MW')) {
    result.push('PA');
  }
  if (selectedCourses.includes('SK')) {
    result.push('PA');
  }
  if (selectedCourses.includes('GB')) {
    result.push('PA');
  }
  if (selectedCourses.includes('PW')) {
    result.push('PA');
  }
  /* pet */
  if (selectedCourses.includes('DG')) {
    result.push('DS');
  }
  if (selectedCourses.includes('FA')) {
    result.push('DS');
  }
  if (selectedCourses.includes('DS')) {
    result.push('DG');
    result.push('FA');
  }
  return result;
};

/**
 * Returns an array indicating which courses should be hidden based on which courses are selected
 * @param selectedCourses which courses are selected
 */
const hiddenCourses = (selectedCourses: string[]): string[] => {
  const result = [];
  /* design */
  if (!selectedCourses.includes('I2')) {
    result.push('MS');
  }
  return result;
};

export interface CoursesState {
  selected: string[];
  disabled: string[];
  hidden: string[];
}

export type CoursesAction =
  | { type: 'CLEAR_COURSES'; payload: { student?: boolean; countryCode: string; provinceCode: string | null } }
  | { type: 'ADD_COURSE'; payload: { courseCode: string; student?: boolean; countryCode: string; provinceCode: string | null } }
  | { type: 'REMOVE_COURSE'; payload: { courseCode: string; student?: boolean; countryCode: string; provinceCode: string | null } }
  | { type: 'RECALCULATE'; payload: { student?: boolean; countryCode: string; provinceCode: string | null } };

export const initialCoursesState: CoursesState = {
  selected: [],
  disabled: [ 'MS' ],
  hidden: [ 'MS', 'DC' ],
};

export const coursesReducer = (state: CoursesState, action: CoursesAction): CoursesState => {
  switch (action.type) {
    case 'RECALCULATE': {
      const hidden = hiddenCourses([], !!action.payload.student, action.payload.countryCode, action.payload.provinceCode); // recalculate which courses are hidden
      return {
        ...state,
        selected: state.selected.filter(c => !hidden.includes(c)),
        disabled: disabledCourses([], !!action.payload.student), // recalculate which courses are disabled,
        hidden,
      };
    }
    case 'CLEAR_COURSES': {
      return {
        ...state,
        selected: [],
        disabled: disabledCourses([], !!action.payload.student), // recalculate which courses are disabled,
        hidden: hiddenCourses([], !!action.payload.student, action.payload.countryCode, action.payload.provinceCode), // recalculate which courses are hidden,
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
          disabled: disabledCourses(selected, !!action.payload.student), // recalculate which courses are disabled
          hidden: hiddenCourses(selected, !!action.payload.student, action.payload.countryCode, action.payload.provinceCode), // recalculate which courses are hidden
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
        if (!action.payload.student && !selected.includes('I2')) {
          selected = selected.filter(c => c !== 'MS');
        }
        // also remove DC if DT is being removed
        if (!action.payload.student && !selected.includes('DT')) {
          selected = selected.filter(c => c !== 'DC');
        }
        return {
          ...state,
          selected,
          disabled: disabledCourses(selected, !!action.payload.student), // recalculate which courses are disabled
          hidden: hiddenCourses(selected, !!action.payload.student, action.payload.countryCode, action.payload.provinceCode), // recalculate which courses are hidden
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
const disabledCourses = (selectedCourses: string[], student: boolean): string[] => {
  const result = [];
  /* design */
  if (!student && !selectedCourses.includes('I2') && !selectedCourses.includes('ID')) {
    result.push('MS');
  }
  if (selectedCourses.includes('I2') || selectedCourses.includes('ID') || selectedCourses.includes('MS')) {
    result.push('ST');
  }
  if (selectedCourses.includes('ST')) {
    result.push('I2');
    result.push('ID');
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
    result.push('GT');
    result.push('DE');
  }
  if (selectedCourses.includes('DE')) {
    result.push('DG');
  }
  if (selectedCourses.includes('FA')) {
    result.push('DS');
  }
  if (selectedCourses.includes('DS')) {
    result.push('DG');
    result.push('DE');
    result.push('FA');
  }
  if (!student && !selectedCourses.includes('DT')) {
    result.push('DC');
  }
  if (selectedCourses.includes('GT')) {
    result.push('DG');
    result.push('DE');
  }
  return result;
};

/**
 * Returns an array indicating which courses should be hidden based on which courses are selected
 * @param selectedCourses which courses are selected
 */
const hiddenCourses = (selectedCourses: string[], student: boolean, countryCode: string, provinceCode: string | null): string[] => {
  const result = [];
  /* design */
  if (!student && !selectedCourses.includes('I2')) {
    result.push('MS');
  }
  /* pet */
  if (!(countryCode === 'US' || (countryCode === 'CA' && provinceCode !== 'ON'))) {
    result.push('DE');
  }
  // if (!selectedCourses.includes('DT')) {
  //   result.push('DC');
  // }
  return result;
};

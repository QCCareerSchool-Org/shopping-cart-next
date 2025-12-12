import type { EnrollmentErrors } from '@/domain/enrollmentErrors';

import type { JSX } from "react";

export type ErrorsState = {
  errors: EnrollmentErrors;
  showPopup: boolean;
  popupTitle: string;
  popupMessage: JSX.Element | null;
};

export type ErrorsAction =
  | { type: 'SET_ERRORS'; payload: EnrollmentErrors }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'SHOW_POPUP'; payload: { title: string; message: JSX.Element } }
  | { type: 'HIDE_POPUP' };

const initialErrors: EnrollmentErrors = {
  studentAddress: {},
  billingAddress: {},
};

export const initialErrorsState: ErrorsState = {
  errors: initialErrors,
  showPopup: false,
  popupTitle: '',
  popupMessage: null,
};

export function errorsReducer(state: ErrorsState, action: ErrorsAction): ErrorsState {
  switch (action.type) {
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'CLEAR_ERRORS':
      return { ...state, errors: initialErrors };
    case 'SHOW_POPUP':
      return { ...state, showPopup: true, popupTitle: action.payload.title, popupMessage: action.payload.message };
    case 'HIDE_POPUP':
      return { ...state, showPopup: false };
  }
}

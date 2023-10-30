import { useReducer } from 'react';

export const useToggle = (initialValue: boolean): [ value: boolean, toggle: () => void ] => {
  const [ value, toggle ] = useReducer(state => !state, initialValue);

  return [ value, toggle ];
};

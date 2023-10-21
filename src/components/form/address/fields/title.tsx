import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { isTitle, titles } from '@/domain/title';
import { useAddressDispatch } from '@/hooks/useAddressDispatch';
import { useAddressState } from '@/hooks/useAddressState';

export const Title: FC = () => {
  const id = useId();
  const addressState = useAddressState();
  const addressDispatch = useAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const title = e.target.value;
    if (!isTitle(title)) {
      throw Error('Invalid title');
    }
    addressDispatch({ type: 'SET_TITLE', payload: title });
  };

  return (
    <>
      <label htmlFor={`${id}title`} className="form-label">Title</label>
      <select
        onChange={handleChange}
        value={addressState.title}
        name="title"
        id={`${id}title`}
        className="form-select"
        autoComplete="shipping honorific-prefix"
        autoCapitalize="words"
        autoCorrect="off"
        required
      >
        {titles.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </>
  );
};

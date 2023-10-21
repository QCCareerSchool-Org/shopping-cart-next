import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { isTitle, titles } from '@/domain/title';
import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';

export const Title: FC = () => {
  const id = useId();
  const billingAddressState = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    const title = e.target.value;
    if (!isTitle(title)) {
      throw Error('Invalid title');
    }
    billingAddressDispatch({ type: 'SET_BILLING_TITLE', payload: title });
  };

  return (
    <>
      <label htmlFor={`${id}title`} className="form-label">Title</label>
      <select
        onChange={handleChange}
        value={billingAddressState.title}
        name="title"
        id={`${id}title`}
        className="form-select"
        autoComplete="billing honorific-prefix"
        autoCapitalize="words"
        autoCorrect="off"
        required
      >
        {titles.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
    </>
  );
};

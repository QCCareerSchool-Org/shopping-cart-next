'use client';

import type { TokenizeError } from 'node_modules/paysafe-form/dist/lib/paysafe/tokenize';
import { useFormContext } from 'paysafe-form';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { FaCalendar, FaCcMastercard, FaCcVisa, FaCreditCard, FaShield } from 'react-icons/fa6';

import { CardError } from './cardError';

interface Props {
  id: string;
  error?: TokenizeError;
}

interface Validity {
  fields: {
    CardNumber: boolean;
    Cvv: boolean;
    ExpiryDate: boolean;
  };
  allValid: boolean;
}

export const CardForm: FC<Props> = ({ id, error }) => {
  const { setupKey, instance, initialized } = useFormContext();
  const [ validity, setValidity ] = useState<Validity>({
    fields: {
      CardNumber: false,
      Cvv: false,
      ExpiryDate: false,
    },
    allValid: false,
  });

  useEffect(() => {
    if (!instance || !initialized.card) {
      return;
    }

    let active = true;

    instance.fields('Cvv CardNumber ExpiryDate').on('Valid Invalid', function (this: HTMLElement, _, event) {
      if (!active) {
        return;
      }

      this.classList.toggle('is-invalid', event.type === 'Invalid');
      this.classList.toggle('is-valid', event.type === 'Valid');

      setValidity(v => {
        const fields = {
          ...v.fields,
          [event.target.fieldName]: event.type === 'Valid',
        };
        return {
          ...v,
          fields,
          allValid: Object.values(fields).every(Boolean),
        };
      });
    });

    return () => { active = false; };
  }, [ instance, initialized.card ]);

  const disabled = !initialized.card || !validity.allValid;

  return (
    <>
      <div className="row g-3">
        <div className="col-12">
          <label htmlFor={`cardNumber_${id}_${setupKey}`} className="form-label">Card Number</label>
          <div className="input-group">
            <span className="input-group-text"><FaCreditCard /></span>
            <div id={`cardNumber_${id}_${setupKey}`} className="form-control" style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} />
          </div>
        </div>
        <div className="col-7">
          <label htmlFor={`expiryDate_${id}_${setupKey}`} className="form-label"><span className="d-none d-small-inline">Expiration</span><span className="d-inline d-small-none">Exp</span> Date</label>
          <div className="input-group">
            <span className="input-group-text"><FaCalendar /></span>
            <div id={`expiryDate_${id}_${setupKey}`} className="form-control" style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} />
          </div>
        </div>
        <div className="col-5">
          <label htmlFor={`cvv_${id}_${setupKey}`} className="form-label">CSC</label>
          <div className="input-group">
            <span className="input-group-text"><FaShield /></span>
            <div id={`cvv_${id}_${setupKey}`} className="form-control" style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className={`btn ${disabled ? 'btn-secondary' : 'btn-success'} btn-lg w-100`} disabled={disabled}>Enroll Now</button>
          <div className="d-flex align-items-center mt-3">
            <FaCcVisa size="36" className="me-2 text-dark" />
            <FaCcMastercard size="36" className="me-2 text-dark" />
          </div>
        </div>
        {error && <div className="col-12"><CardError error={error} /></div>}
      </div>
    </>
  );
};

import type { ChangeEventHandler, FC } from 'react';
import { useId } from 'react';

import { Address1 } from './fields/address1';
import { Address2 } from './fields/address2';
import { City } from './fields/city';
import { CountryCode } from './fields/countryCode';
import { EmailAddress } from './fields/emailAddress';
import { FirstName } from './fields/firstName';
import { LastName } from './fields/lastName';
import { PostalCode } from './fields/postalCode';
import { ProvinceCode } from './fields/provinceCode';
import { TelephoneNumber } from './fields/telephoneNumber';
import { Title } from './fields/title';
import { FormGroup } from '@/components/formGroup';
import { Section } from '@/components/section';
import { useBillingAddressDispatch } from '@/hooks/useBillingAddressDispatch';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { needsProvince } from '@/lib/needProvince';
import { needsPostal } from '@/lib/needsPostal';

export const BillingAddress: FC = () => {
  const id = useId();
  const { countryCode } = useBillingAddressState();
  const { sameAsShipping } = useBillingAddressState();
  const billingAddressDispatch = useBillingAddressDispatch();

  const showPostal = needsPostal(countryCode);
  const showProvince = needsProvince(countryCode);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    billingAddressDispatch({ type: 'SET_BILLING_DISABLED', payload: e.target.checked });
  };

  return (
    <Section className="billingAddressSection">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 d-flex flex-column justify-content-center">
          <h2 className="h1">Billing Address</h2>
          <div className="form-check">
            <input onChange={handleChange} checked={sameAsShipping} type="checkbox" id={`${id}SameAsShipping`} className="form-check-input" />
            <label className="form-check-label" htmlFor={`${id}SameAsShipping`}>Use student address for billing address</label>
          </div>
        </div>
      </div>
      {!sameAsShipping && (
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-6 col-lg-4">
            <FormGroup><Title /></FormGroup>
            <FormGroup><FirstName /></FormGroup>
            <FormGroup><LastName /></FormGroup>
            <FormGroup><EmailAddress /></FormGroup>
            <FormGroup><TelephoneNumber /></FormGroup>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FormGroup><CountryCode /></FormGroup>
            <FormGroup><Address1 /></FormGroup>
            <FormGroup><Address2 /></FormGroup>
            <FormGroup><City /></FormGroup>
            {showPostal
              ? showProvince
                ? (
                  <div className="row">
                    <div className="col"><FormGroup><ProvinceCode /></FormGroup></div>
                    <div className="col"><FormGroup><PostalCode /></FormGroup></div>
                  </div>
                )
                : <FormGroup><PostalCode /></FormGroup>
              : showProvince && <FormGroup><ProvinceCode /></FormGroup>
            }
          </div>
        </div>
      )}
    </Section>
  );
};

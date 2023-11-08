import type { FC, FormEventHandler } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { FaCalendarAlt, FaCcMastercard, FaCcVisa, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

import { FormGroup } from '@/components/formGroup';
import type { PaysafeCompany } from '@/domain/paysafeCompany';
import { useAddressState } from '@/hooks/useAddressState';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { usePriceState } from '@/hooks/usePriceState';
import type { PaysafeInstance, TokenizeOptions } from '@/lib/paysafe';
import { accounts, apiKeys, createInstance, tokenize } from '@/lib/paysafe';
import type { AddressState } from '@/state/address';
import type { BillingAddressState } from '@/state/billingAddress';
import type { PriceState } from '@/state/price';

type Props = {
  company: PaysafeCompany;
  show: boolean;
  onHide: () => void;
  onCharge: (token: string, compay: PaysafeCompany) => Promise<boolean>;
};

type Errors = { displayMessage?: string };

type Status = {
  panValid: boolean;
  expValid: boolean;
  cvvValid: boolean;
  panFilled: boolean;
  expFilled: boolean;
  cvvFilled: boolean;
  submitted?: boolean;
  errors?: Errors;
};

const isErrors = (obj: unknown): obj is Errors => {
  return obj !== null && typeof obj === 'object' && 'displayMessage' in obj && (typeof obj.displayMessage === 'undefined' || typeof obj.displayMessage === 'string');
};

/**
 * When isOpen is set to true for the first time, we need to initialize a paysafe instance, but we can't do it until after all the DOM elements are rendered.
 * The initialized state will only be set to true after the first render where isOpen is true. After that we can create the instance.
 */
export const PaysafeModal: FC<Props> = props => {
  const priceState = usePriceState();
  const addressState = useAddressState();
  const billingAddressState = useBillingAddressState();

  const instance = useRef<PaysafeInstance>();

  const [ status, setStatus ] = useState<Status>({
    panValid: false,
    expValid: false,
    cvvValid: false,
    panFilled: false,
    expFilled: false,
    cvvFilled: false,
    submitted: false,
  });

  const [ submitting, setSubmitting ] = useState(false);
  const [ success, setSuccess ] = useState(false);

  useEffect(() => {
    if (!props.show) {
      return;
    }
    const options = {
      environment: 'LIVE',
      fields: {
        cardNumber: { selector: `#cardNumber${props.company}`, placeholder: 'Card Number' },
        expiryDate: { selector: `#expiryDate${props.company}`, placeholder: 'Exp. Date' },
        cvv: { selector: `#cvv${props.company}`, placeholder: 'CSC' },
      },
      style: {
        input: {
          'font-family': 'Helvetica,Arial,sans-serif',
          'font-weight': 'normal',
          'font-size': '14px',
          'color': 'black',
        },
      },
    };
    createInstance(apiKeys[props.company], options).then(i => {
      i.fields('cardNumber').valid(() => setStatus(s => ({ ...s, panValid: true })));
      i.fields('expiryDate').valid(() => setStatus(s => ({ ...s, expValid: true })));
      i.fields('cvv').valid(() => setStatus(s => ({ ...s, cvvValid: true })));
      i.fields('cardNumber').invalid(() => setStatus(s => ({ ...s, panValid: false })));
      i.fields('expiryDate').invalid(() => setStatus(s => ({ ...s, expValid: false })));
      i.fields('cvv').invalid(() => setStatus(s => ({ ...s, cvvValid: false })));
      i.fields('cardNumber expiryDate cvv').on('FieldValueChange', () => setStatus(s => ({ ...s, submitted: false, errors: undefined })));
      i.fields('cardNumber').on('Blur', () => setStatus(s => ({ ...s, panFilled: true })));
      i.fields('expiryDate').on('Blur', () => setStatus(s => ({ ...s, expFilled: true })));
      i.fields('cvv').on('Blur', () => setStatus(s => ({ ...s, cvvFilled: true })));
      instance.current = i;
    }).catch(err => {
      console.error(err);
    });
  }, [ props.company, props.show ]);

  if (!priceState) {
    return null;
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    if (submitting || success) {
      return;
    }
    setSubmitting(true);
    void (async () => {
      try {
        if (!instance.current) {
          throw Error('instance not defined');
        }
        const options = getTokenizeOptions(props.company, priceState, addressState, billingAddressState);
        setStatus(s => ({ ...s, submitted: true }));
        const token = await tokenize(instance.current, options);
        const chargeResult = await props.onCharge(token, props.company);
        if (chargeResult === false) {
          props.onHide();
        } else {
          setSuccess(true);
        }
      } catch (err) {
        if (isErrors(err)) {
          setStatus(s => ({ ...s, errors: err as Errors }));
        } else {
          console.error(err);
        }
      } finally {
        setSubmitting(false);
      }
    })();
  };

  const buttonDisabled = submitting || !status.panValid || !status.expValid || !status.cvvValid || success;

  return (
    <>
      <Modal size="sm" show={props.show} onHide={props.onHide} backdrop="static">
        <ModalHeader closeButton><strong>Card Details</strong></ModalHeader>
        <ModalBody>
          <form id="payment-form" method="POST" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <FormGroup>
                  <label htmlFor={'cardNumber' + props.company}>Card Number</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaCreditCard /></span>
                    <div className={'form-control' + ((status.submitted ?? status.panFilled) && !status.panValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={'cardNumber' + props.company} />
                  </div>
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <FormGroup>
                  <label htmlFor="expiryDate"><span className="d-none d-small-inline">Expiration</span><span className="d-inline d-small-none">Exp</span> Date</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaCalendarAlt /></span>
                    <div className={'form-control' + ((status.submitted ?? status.expFilled) && !status.expValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={'expiryDate' + props.company} />
                  </div>
                </FormGroup>
              </div>
              <div className="col-5">
                <FormGroup>
                  <label htmlFor="cvv">CSC</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaShieldAlt /></span>
                    <div className={'form-control' + ((status.submitted ?? status.cvvFilled) && !status.cvvValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={'cvv' + props.company} />
                  </div>
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className={`btn ${buttonDisabled ? 'btn-secondary' : 'btn-success'} btn-lg w-100`} disabled={buttonDisabled}>Enroll Now</button>
                <div className="d-flex align-items-center mt-3">
                  <FaCcVisa size="36" className="me-2 text-dark" />
                  <FaCcMastercard size="36" className="me-2 text-dark" />
                </div>
              </div>
            </div>
          </form>

          {status.errors && (
            <div className="alert alert-danger mt-3 mb-0">
              {status.errors.displayMessage ?? 'Unknown Error'}
            </div>
          )}

        </ModalBody>
      </Modal>
    </>
  );
};

const getTokenizeOptions = (company: PaysafeCompany, priceState: PriceState, addressState: AddressState, billingAddressState: BillingAddressState): TokenizeOptions | undefined => {
  if (!priceState) {
    throw Error('Price is undefined');
  }
  if (company === 'GB' && priceState.currency.code === 'GBP') {
    const accountId = (accounts[company] as { [key: string]: number })[priceState.currency.code];
    if (typeof accountId === 'undefined') {
      throw Error(`Currency ${priceState.currency.code} not supported by ${company} company`);
    }
    const options: TokenizeOptions = {
      threeDS: {
        amount: 0,
        currency: priceState.currency.code,
        accountId,
        useThreeDSecureVersion2: true,
        requestorChallengePreference: 'CHALLENGE_MANDATED',
      },
      vault: {
        holderName: `${addressState.firstName} ${addressState.lastName}`,
        billingAddress: billingAddressState.sameAsShipping
          ? {
            country: addressState.countryCode,
            zip: addressState.postalCode || '0',
            city: addressState.city,
            street: addressState.address1,
          }
          : {
            country: billingAddressState.countryCode,
            zip: billingAddressState.postalCode || '0',
            city: billingAddressState.city,
            street: billingAddressState.address1,
          },
        shippingAddress: {
          recipientName: `${addressState.firstName} ${addressState.lastName}`,
          street: addressState.address1,
          city: addressState.city,
          country: addressState.countryCode,
          zip: addressState.postalCode || '0',
          shipMethod: 'S',
        },
      },
    };

    if (options.vault?.billingAddress) {
      if (billingAddressState.sameAsShipping) {
        if (addressState.address2) {
          options.vault.billingAddress.street2 = addressState.address2;
        }
        if (addressState.provinceCode) {
          options.vault.billingAddress.state = addressState.provinceCode;
        }
      } else {
        if (billingAddressState.address2) {
          options.vault.billingAddress.street2 = billingAddressState.address2;
        }
        if (billingAddressState.provinceCode) {
          options.vault.billingAddress.state = billingAddressState.provinceCode;
        }
      }
    }

    if (options.vault?.shippingAddress) {
      if (addressState.address2) {
        options.vault.shippingAddress.street2 = addressState.address2;
      }
      if (addressState.provinceCode) {
        options.vault.shippingAddress.state = addressState.provinceCode;
      }
    }

    return options;
  }
};

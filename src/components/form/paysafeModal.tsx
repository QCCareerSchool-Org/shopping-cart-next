import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { FaCalendarAlt, FaCcMastercard, FaCcVisa, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

import type { PaysafeCompany } from '@/domain/paysafeCompany';
import { useAddressState } from '@/hooks/useAddressState';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { usePriceState } from '@/hooks/usePriceState';
import type { PaysafeInstance, TokenizeOptions } from '@/lib/paysafe';
import { createInstance, tokenize } from '@/lib/paysafe';
import type { AddressState } from '@/state/address';
import type { BillingAddressState } from '@/state/billingAddress';
import type { PriceState } from '@/state/price';

type Props = {
  company: PaysafeCompany;
  show: boolean;
  onHide: () => void;
  onCharge: (token: string, compay: PaysafeCompany) => Promise<boolean>;
};

type Status = {
  instance?: PaysafeInstance;
  panValid: boolean;
  expValid: boolean;
  cvvValid: boolean;
  panFilled: boolean;
  expFilled: boolean;
  cvvFilled: boolean;
  submitted?: boolean;
  errors?: { displayMessage?: string };
};

const apiKeys = {
  CA: 'T1QtMjM2NjU0OkItcDEtMC01OWY5ZTIzNS0wLTMwMmMwMjE0MzAzYTA1ZDYzNTYwMGMyMzBhNzdhMzk4MDU4NDkzY2I2NTFhOGI2NTAyMTQxOTBjMzM3NzhlZGFkMGVmNzQ4NDkzYjE5NDEyMzk2NGNkYjU3NGFh',
  US: 'T1QtMjM2NjU0OkItcDEtMC01OWY5ZTIzNS0wLTMwMmMwMjE0MzAzYTA1ZDYzNTYwMGMyMzBhNzdhMzk4MDU4NDkzY2I2NTFhOGI2NTAyMTQxOTBjMzM3NzhlZGFkMGVmNzQ4NDkzYjE5NDEyMzk2NGNkYjU3NGFh',
  GB: 'T1QtMzEyOTc0OkItcDEtMC01ZDFlMDAwYS0wLTMwMmMwMjE0NTY4ZmM1MjE4M2MyYTI3YWQ1MWMxNzA2NGVjM2Y1NjEwZDIwNjc0OTAyMTQ2ZTQ5OTBkOGM0MTY3NDlkZWZlYThiZGU2NDY3MDA2NGJlNDA1Njc3',
};

const accounts = {
  CA: {
    CAD: 1002521124, // eslint-disable-line @typescript-eslint/no-magic-numbers
    NZD: 1002567684, // eslint-disable-line @typescript-eslint/no-magic-numbers
    AUD: 1002567744, // eslint-disable-line @typescript-eslint/no-magic-numbers
    GBP: 1002567754, // eslint-disable-line @typescript-eslint/no-magic-numbers
  },
  US: {
    USD: 1002704564, // eslint-disable-line @typescript-eslint/no-magic-numbers
  },
  GB: {
    GBP: 1002659124, // eslint-disable-line @typescript-eslint/no-magic-numbers
    AUD: 1002649432, // eslint-disable-line @typescript-eslint/no-magic-numbers
    NZD: 1002818994, // eslint-disable-line @typescript-eslint/no-magic-numbers
  },
};

/**
 * When isOpen is set to true for the first time, we need to initialize a paysafe instance, but we can't do it until after all the DOM elements are rendered.
 * The initialized state will only be set to true after the first render where isOpen is true. After that we can create the instance.
 */
export const PaysafeModal: React.FC<Props> = props => {
  const priceState = usePriceState();
  const addressState = useAddressState();
  const billingAddressState = useBillingAddressState();

  const [ status, setStatus ] = useState<Status>({
    panValid: false,
    expValid: false,
    cvvValid: false,
    panFilled: false,
    expFilled: false,
    cvvFilled: false,
    submitted: false,
  });
  const [ initialized, setInitialized ] = useState(false);
  const [ submitting, setSubmitting ] = useState(false);
  const [ success, setSuccess ] = useState(false);

  useEffect(() => {
    if (props.show) {
      if (!initialized) {
        setInitialized(true);
      } else if (!status.instance) {
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
        createInstance(apiKeys[props.company], options).then(instance => {
          instance.fields('cardNumber').valid(() => setStatus(s => ({ ...s, panValid: true })));
          instance.fields('expiryDate').valid(() => setStatus(s => ({ ...s, expValid: true })));
          instance.fields('cvv').valid(() => setStatus(s => ({ ...s, cvvValid: true })));
          instance.fields('cardNumber').invalid(() => setStatus(s => ({ ...s, panValid: false })));
          instance.fields('expiryDate').invalid(() => setStatus(s => ({ ...s, expValid: false })));
          instance.fields('cvv').invalid(() => setStatus(s => ({ ...s, cvvValid: false })));
          instance.fields('cardNumber expiryDate cvv').on('FieldValueChange', () => setStatus(s => ({ ...s, submitted: false, errors: undefined })));
          instance.fields('cardNumber').on('Blur', () => setStatus(s => ({ ...s, panFilled: true })));
          instance.fields('expiryDate').on('Blur', () => setStatus(s => ({ ...s, expFilled: true })));
          instance.fields('cvv').on('Blur', () => setStatus(s => ({ ...s, cvvFilled: true })));
          setStatus(s => ({ ...s, instance }));
        }).catch(err => {
          console.error(err);
        });
      }
    }
  }, [ props.company, props.show, initialized, status.instance ]);

  if (!priceState) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (submitting || success) {
      return;
    }
    setSubmitting(true);
    const options = getTokenizeOptions(props.company, priceState, addressState, billingAddressState);
    if (!status.instance) {
      throw Error('instance not defined');
    }
    setStatus(s => ({ ...s, submitted: true }));
    tokenize(status.instance, options).then(async token => {
      return props.onCharge(token, props.company);
    }).then(chargeResult => {
      if (chargeResult === false) {
        props.onHide();
      } else {
        setSuccess(true);
      }
    }).catch(err => {
      console.error(err);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      setStatus(s => ({ ...s, errors: err }));
    }).finally(() => {
      setSubmitting(false);
    });
  };

  const buttonDisabled = submitting || !status.panValid || !status.expValid || !status.cvvValid || success;

  return (
    // <Modal size="sm" show={props.show} onHide={props.onHide} unmountOnClose={false}>
    <Modal size="sm" show={props.show} onHide={props.onHide}>
      <ModalHeader closeButton>Payment Details</ModalHeader>
      <ModalBody>
        <form id="payment-form" method="POST" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor={'cardNumber' + props.company}>Card Number</label>
                <div className="input-group">
                  <div className={'form-control' + ((status.submitted ?? status.panFilled) && !status.panValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={'cardNumber' + props.company} />
                  <div className="input-group-append">
                    <span className="input-group-text"><FaCreditCard /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <div className="form-group">
                <label htmlFor="expiryDate"><span className="d-none d-small-inline">Expiration</span><span className="d-inline d-small-none">Exp</span> Date</label>
                <div className="input-group">
                  <div className={'form-control' + ((status.submitted ?? status.expFilled) && !status.expValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={'expiryDate' + props.company} />
                  <div className="input-group-append">
                    <span className="input-group-text"><FaCalendarAlt /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="form-group">
                <label htmlFor="cvv">CSC</label>
                <div className="input-group">
                  <div className={'form-control' + ((status.submitted ?? status.cvvFilled) && !status.cvvValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={'cvv' + props.company} />
                  <div className="input-group-append">
                    <span className="input-group-text"><FaShieldAlt /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className={`btn ${buttonDisabled ? 'btn-secondary' : 'btn-success'} btn-lg btn-block`} disabled={buttonDisabled}>Enroll Now</button>
              <div className="d-flex align-items-center mt-3">
                <FaCcVisa size="2x" className="mr-2 text-dark" />
                <FaCcMastercard size="2x" className="mr-2 text-dark" />
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

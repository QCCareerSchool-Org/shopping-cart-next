import type { FC, SubmitEventHandler } from 'react';
import { useEffect, useId, useRef, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { FaCalendarAlt, FaCcMastercard, FaCcVisa, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

import { FormGroup } from '@/components/formGroup';
import type { PaysafeCompany } from '@/domain/paysafeCompany';
import { useAddressState } from '@/hooks/useAddressState';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { usePriceState } from '@/hooks/usePriceState';
import type { PaysafeInstance } from '@/lib/paysafe';
import { createInstance, getToken } from '@/lib/paysafe';

interface Props {
  company: PaysafeCompany;
  show: boolean;
  onHide: () => void;
  onCharge: (token: string, compay: PaysafeCompany) => Promise<boolean>;
}

interface Errors { displayMessage?: string }

interface Status {
  panValid: boolean;
  expValid: boolean;
  cvvValid: boolean;
  panFilled: boolean;
  expFilled: boolean;
  cvvFilled: boolean;
  submitted?: boolean;
  errors?: Errors;
}

const isErrors = (obj: unknown): obj is Errors => {
  return obj !== null && typeof obj === 'object' && 'displayMessage' in obj && (typeof obj.displayMessage === 'undefined' || typeof obj.displayMessage === 'string');
};

/**
 * When isOpen is set to true for the first time, we need to initialize a paysafe instance, but we can't do it until after all the DOM elements are rendered.
 * The initialized state will only be set to true after the first render where isOpen is true. After that we can create the instance.
 */
export const PaysafeModal: FC<Props> = props => {
  const id = useId();
  const priceState = usePriceState();
  const addressState = useAddressState();
  const billingAddressState = useBillingAddressState();

  const instance = useRef<PaysafeInstance>(undefined);

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

  const cardNumberId = `${id.replace(/:/ug, '_')}cardNumber${props.company}`;
  const expiryDateId = `${id.replace(/:/ug, '_')}expiryDate${props.company}`;
  const cvvId = `${id.replace(/:/ug, '_')}cvv${props.company}`;

  useEffect(() => {
    if (!props.show) {
      return;
    }
    createInstance(props.company, cardNumberId, expiryDateId, cvvId).then(i => {
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
    }).catch((err: unknown) => {
      console.error(err);
    });
  }, [ props.company, props.show, cardNumberId, expiryDateId, cvvId ]);

  if (!priceState) {
    return null;
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = e => {
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
        setStatus(s => ({ ...s, submitted: true }));
        const token = await getToken(instance.current, props.company, priceState.currency.code, addressState, billingAddressState, billingAddressState.sameAsShipping);
        const chargeResult = await props.onCharge(token, props.company);
        if (!chargeResult) {
          props.onHide();
        } else {
          setSuccess(true);
        }
      } catch (err) {
        if (isErrors(err)) {
          setStatus(s => ({ ...s, errors: err }));
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
                  <label htmlFor={cardNumberId}>Card Number</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaCreditCard /></span>
                    <div className={'form-control' + ((status.submitted ?? status.panFilled) && !status.panValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={cardNumberId} />
                  </div>
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-7">
                <FormGroup>
                  <label htmlFor={expiryDateId}><span className="d-none d-small-inline">Expiration</span><span className="d-inline d-small-none">Exp</span> Date</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaCalendarAlt /></span>
                    <div className={'form-control' + ((status.submitted ?? status.expFilled) && !status.expValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={expiryDateId} />
                  </div>
                </FormGroup>
              </div>
              <div className="col-5">
                <FormGroup>
                  <label htmlFor={cvvId}>CSC</label>
                  <div className="input-group">
                    <span className="input-group-text"><FaShieldAlt /></span>
                    <div className={'form-control' + ((status.submitted ?? status.cvvFilled) && !status.cvvValid ? ' is-invalid' : '')} style={{ height: '36px', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} id={cvvId} />
                  </div>
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className={`btn ${buttonDisabled ? 'btn-secondary' : 'btn-success'} btn-lg w-100`} disabled={buttonDisabled}>Enroll Now</button>
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

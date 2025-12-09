import type { FC, MouseEventHandler } from 'react';
import { useId, useMemo, useState } from 'react';
import { FaTag } from 'react-icons/fa';

import { Popup } from './popup';
import { getPromos } from './promos';
import { FormGroup } from '@/components/formGroup';
import { PromoCode } from '@/components/promoCode';
import type { School } from '@/domain/school';
import { useErrorsDispatch } from '@/hooks/useErrorsDispatch';
import { useErrorsState } from '@/hooks/useErrorsState';
import { useMetaDispatch } from '@/hooks/useMetaDispatch';
import { useMetaState } from '@/hooks/useMetaState';
import { usePriceState } from '@/hooks/usePriceState';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useToggle } from '@/hooks/useToggle';
import { ucWords } from '@/lib/ucWords';

type Props = {
  date: number;
  school: School;
};

export const PromoCodeInput: FC<Props> = ({ date, school }) => {
  const screenWidth = useScreenWidth();
  const { promoCode, promoCodeInputValue, student, emailConsent, termsConsent } = useMetaState();
  const priceState = usePriceState();
  const metaDispatch = useMetaDispatch();
  const { errors } = useErrorsState();
  const errorsDispatch = useErrorsDispatch();
  const [ popup, togglePopup ] = useToggle(false);
  const [ couponError, setCouponError ] = useState(false);
  const subscribeCheckboxId = useId();
  const termsCheckboxId = useId();

  const promos = useMemo(() => getPromos(date, priceState, school, student), [ date, priceState, school, student ]);

  const handleViewButtonClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    togglePopup();
  };

  const handlePopupHide = (): void => {
    togglePopup();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    metaDispatch({ type: 'SET_PROMO_CODE_INPUT_VALUE', payload: value });
    if (couponError && value.trim().length > 0) {
      setCouponError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!promoCodeInputValue.trim()) {
      setCouponError(true);
      return;
    }
    setCouponError(false);
    metaDispatch({ type: 'SET_PROMO_CODE', payload: promoCodeInputValue });
  };

  const popupApply = (code: string): void => {
    metaDispatch({ type: 'SET_PROMO_CODE', payload: code });
  };

  const handleRemoveButtonClick = (): void => {
    metaDispatch({ type: 'CLEAR_PROMO_CODE' });
  };

  const clearConsentError = (field: 'terms'): void => {
    if (errors.consent?.[field]) {
      const nextConsent = { ...(errors.consent ?? {}) };
      delete nextConsent[field];
      errorsDispatch({ type: 'SET_ERRORS', payload: { ...errors, consent: nextConsent } });
    }
  };

  const handleEmailConsentChange = (checked: boolean): void => {
    metaDispatch({ type: 'SET_EMAIL_CONSENT', payload: checked });
  };

  const handleTermsConsentChange = (checked: boolean): void => {
    metaDispatch({ type: 'SET_TERMS_CONSENT', payload: checked });
    if (checked) {
      clearConsentError('terms');
    }
  };

  return (
    <div className="mt-4">
      <label htmlFor="coupon-code-input" className="form-label">{ucWords('coupon code')}</label>
      {promoCode && priceState?.promoCodeRecognized
        ? (
          <div className={`alert ${priceState?.promoWarnings.length > 0 ? 'alert-warning' : 'alert-success'} alert-dismissible fade show`} role="alert">
            {priceState.promoWarnings.length > 0
              ? priceState.promoWarnings.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} className={`mb-0 ${i > 0 ? 'mt-2' : ''}`} />)
              : <>Coupon code applied: <PromoCode>{promoCode}</PromoCode></>
            }
            <button onClick={handleRemoveButtonClick} type="button" className="btn-close" aria-label="Close" />
          </div>
        )
        : (
          <>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <div className="d-flex align-items-center">
                  <input
                    onChange={handleChange}
                    type="text"
                    id="coupon-code-input"
                    className={`form-control text-center text-uppercase fw-bold me-2${couponError ? ' is-invalid' : ''}`}
                    style={{ letterSpacing: '0.75px', maxWidth: 200 }}
                    value={promoCodeInputValue}
                    aria-describedby="promoHelp"
                  />
                  <button type="submit" className="coupon-apply-btn">
                    {screenWidth >= 365 && <FaTag className="coupon-apply-icon" />}
                    <span>Apply</span>
                  </button>
                </div>
              </FormGroup>
              {promos.length > 0 && (
                <div id="promoHelp" className="form-text mt-0">
                  <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" style={{ textDecoration: 'none' }} onClick={handleViewButtonClick}><FaTag /> View all promotions</button>
                </div>
              )}
            </form>
            {priceState?.promoCodeRecognized === false && (
              <div className="alert alert-danger mt-3">
                Unrecognized code
              </div>
            )}
            <Popup date={date} popup={popup} onHide={handlePopupHide} apply={popupApply} promos={promos} />
          </>
        )}
      <div className="coupon-consent mt-4" aria-live="polite">
        <div className="coupon-consent-item form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={`${subscribeCheckboxId}-subscribe`}
            checked={emailConsent}
            onChange={e => handleEmailConsentChange(e.target.checked)}
          />
          <div>
            <label className="form-check-label" htmlFor={`${subscribeCheckboxId}-subscribe`}>
              Subscribe to our email list.
            </label>
          </div>
        </div>
        <div className="coupon-consent-item form-check">
          <input
            type="checkbox"
            className={`form-check-input${errors.consent?.terms ? ' is-invalid' : ''}`}
            id={`${termsCheckboxId}-terms`}
            checked={termsConsent}
            onChange={e => handleTermsConsentChange(e.target.checked)}
          />
          <div>
            <label className="form-check-label" htmlFor={`${termsCheckboxId}-terms`}>
              I have read and agree to the terms and conditions of this page as follows:
            </label>
            {errors.consent?.terms && <div className="invalid-feedback d-block">Required</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

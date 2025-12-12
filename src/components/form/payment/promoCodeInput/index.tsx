import type { FC, MouseEventHandler } from 'react';
import { useMemo } from 'react';
import { FaTag } from 'react-icons/fa';

import { Popup } from './popup';
import { getPromos } from './promos';
import { FormGroup } from '@/components/formGroup';
import { PromoCode } from '@/components/promoCode';
import type { School } from '@/domain/school';
import { useMetaDispatch } from '@/hooks/useMetaDispatch';
import { useMetaState } from '@/hooks/useMetaState';
import { usePriceState } from '@/hooks/usePriceState';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  date: number;
  school: School;
}

export const PromoCodeInput: FC<Props> = ({ date, school }) => {
  const screenWidth = useScreenWidth();
  const { promoCode, promoCodeInputValue, student } = useMetaState();
  const priceState = usePriceState();
  const metaDispatch = useMetaDispatch();
  const [ popup, togglePopup ] = useToggle(false);

  const promos = useMemo(() => getPromos(date, priceState, school, student), [ date, priceState, school, student ]);

  const handleViewButtonClick: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    togglePopup();
  };

  const handlePopupHide = (): void => {
    togglePopup();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    metaDispatch({ type: 'SET_PROMO_CODE_INPUT_VALUE', payload: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    metaDispatch({ type: 'SET_PROMO_CODE', payload: promoCodeInputValue });
  };

  const popupApply = (code: string): void => {
    metaDispatch({ type: 'SET_PROMO_CODE', payload: code });
  };

  const handleRemoveButtonClick = (): void => {
    metaDispatch({ type: 'CLEAR_PROMO_CODE' });
  };

  return (
    <div className="mt-4">
      <h3>Promo Code</h3>
      {promoCode && priceState?.promoCodeRecognized
        ? (
          <div className={`alert ${priceState?.promoWarnings.length > 0 ? 'alert-warning' : 'alert-success'} alert-dismissible fade show`} role="alert">
            {priceState.promoWarnings.length > 0
              ? priceState.promoWarnings.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} className={`mb-0 ${i > 0 ? 'mt-2' : ''}`} />)
              : <>Promo code applied: <PromoCode>{promoCode}</PromoCode></>
            }
            <button onClick={handleRemoveButtonClick} type="button" className="btn-close" aria-label="Close" />
          </div>
        )
        : (
          <>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <div className="d-flex align-items-center">
                  <input onChange={handleChange} type="text" className="form-control text-center text-uppercase fw-bold me-2" style={{ letterSpacing: '0.75px', maxWidth: 200 }} value={promoCodeInputValue} aria-describedby="promoHelp" />
                  <button type="submit" className="btn btn-secondary">{screenWidth >= 365 && <><FaTag />{' '}</>}Apply</button>
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
    </div>
  );
};

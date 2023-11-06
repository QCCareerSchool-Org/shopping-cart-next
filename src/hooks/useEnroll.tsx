import { useAddressState } from './useAddressState';
import { useBillingAddressState } from './useBillingAddressState';
import { useCoursesState } from './useCoursesState';
import { useErrorsDispatch } from './useErrorsDispatch';
import { useMetaDispatch } from './useMetaDispatch';
import { useMetaState } from './useMetaState';
import { useOverridesState } from './useOverridesState';
import { usePaymentState } from './usePaymentState';
import { scrollToPosition } from '@/components/scroller';
import type { PaysafeCompany } from '@/domain/paysafeCompany';
import type { School } from '@/domain/school';
import { addEnrollment, chargeEnrollment, createEnrollmentPayload, EnrollmentError, updateEnrollment } from '@/lib/enroll';
import { clearForm, saveForm } from '@/lib/persist';

type AddToDatabaseFunction = () => Promise<boolean>;
type ChargeFunction = (token: string, company: PaysafeCompany) => Promise<boolean>;

export const useEnroll = (internal: boolean, school: School, successLink: string, promoCodeDefault?: string): [addToDatabase: AddToDatabaseFunction, charge: ChargeFunction] => {
  const coursesState = useCoursesState();
  const addressState = useAddressState();
  const billingAddressState = useBillingAddressState();
  const paymentState = usePaymentState();
  const overridesState = useOverridesState();
  const metaState = useMetaState();
  const metaDispatch = useMetaDispatch();
  const errorsDispatch = useErrorsDispatch();

  const addToDatabase: AddToDatabaseFunction = async () => {
    saveForm(coursesState.selected, addressState, billingAddressState, paymentState);
    errorsDispatch({ type: 'CLEAR_ERRORS' });
    const payload = createEnrollmentPayload(internal, school, coursesState.selected, addressState, billingAddressState, paymentState, overridesState, metaState, promoCodeDefault);
    try {
      if (metaState.enrollment) {
        const addEnrollmentResponse = await updateEnrollment(metaState.enrollment.id, payload);
        metaDispatch({ type: 'SET_ENROLLMENT', payload: addEnrollmentResponse });
      } else {
        const addEnrollmentResponse = await addEnrollment(payload);
        metaDispatch({ type: 'SET_ENROLLMENT', payload: addEnrollmentResponse });
      }
      return true;
    } catch (err) {
      if (err instanceof EnrollmentError) {
        if (err.code === 1) { // course error
          scrollToPosition('courses');
        } else if (err.code === 2) { // payment plan
          scrollToPosition('plan');
        } else if (err.code === 3) { // address error
          scrollToPosition('shipping');
        } else if (err.code === 4) { // billing address error
          scrollToPosition('billing');
        }
        errorsDispatch({ type: 'SET_ERRORS', payload: err.enrollmentErrors });
      }
      return false;
    }
  };

  const charge: ChargeFunction = async (token, company) => {
    try {
      if (!metaState.enrollment) {
        throw Error('enrollment is undefined');
      }
      await chargeEnrollment(metaState.enrollment.id, token, company);
      clearForm();
      window.location.href = `${successLink}?enrollmentId=${metaState.enrollment.id}&code=${metaState.enrollment.code}`;
      return true;
    } catch (err) {
      metaDispatch({ type: 'SET_ENROLLMENT', payload: undefined }); // we'll start over with a new enrollment record if the user tries again

      if (err instanceof Error) {
        let title: string;
        let message: JSX.Element;
        switch (err.message) {
          case 'NSF':
            title = 'Insufficient Funds';
            message = <p>The transaction was declined due to insufficient funds in your account. Please use a different card or contact your bank.</p>;
            break;
          case 'AVS check failed':
            title = 'Address Check Error';
            message = (
              <div>
                <p>There was an error processing your card. Please make sure that your shipping address matches the billing address for your card.</p>
                <p>Attempting to process a payment without a matching address may result in your funds being held for three to five days by the payment processor.</p>
              </div>
            );
            break;
          case 'Declined by bank':
            title = 'Financial Institution Refusal';
            message = <p>There was an error processing your card. Please call the telephone number on the back of your card and authorize the transaction.</p>;
            break;
          default:
            title = 'Processing Error';
            message = (
              <div>
                <p>There was an error processing your card. Please double check your card details.</p>
                <p>If your card details are correct, please call the telephone number on the back of your card to authorize the transaction.</p>
              </div>
            );
        }
        errorsDispatch({ type: 'SHOW_POPUP', payload: { title, message } });
      }
      return false;
    }
  };

  return [ addToDatabase, charge ];
};

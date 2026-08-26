import type { CardOptions, PaymentType, SetupOptions, TokenizeError } from 'paysafe-form';
import { isTokenizeError, PaysafeForm } from 'paysafe-form';
import type { FC } from 'react';
import { useId, useMemo, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

import { CardForm } from './cardForm';
import { environment, getCodes } from './getCodes';
import type { PaysafeCompany } from '@/domain/paysafeCompany';
import type { School } from '@/domain/school';
import { useAddressState } from '@/hooks/useAddressState';
import { useBillingAddressState } from '@/hooks/useBillingAddressState';
import { useMetaState } from '@/hooks/useMetaState';
import { usePaymentState } from '@/hooks/usePaymentState';
import { usePriceState } from '@/hooks/usePriceState';

interface Props {
  school: School;
  company: PaysafeCompany;
  show: boolean;
  onHide: () => void;
  onCharge: (token: string, compay: PaysafeCompany) => Promise<boolean>;
}

export const PaysafeModal: FC<Props> = props => {
  const id = useId();
  const priceState = usePriceState();
  const addressState = useAddressState();
  const billingAddressState = useBillingAddressState();
  const metaState = useMetaState();
  const paymentState = usePaymentState();
  const [ tokenizeError, setTokenizeError ] = useState<TokenizeError>();

  const address = billingAddressState.sameAsShipping ? addressState : billingAddressState;

  const { apiKey, accountId } = useMemo(() => {
    if (!priceState?.currency.code) {
      return { apiKey: null, accountId: null };
    }
    return getCodes(props.company, priceState?.currency.code);
  }, [ props.company, priceState?.currency.code ]);

  const getSetupOptions = useMemo(() => {
    if (!accountId) {
      return;
    }
    return (setupKey: string): SetupOptions => ({
      environment,
      currencyCode: priceState?.currency.code,
      accounts: { default: accountId },
      fields: {
        cardNumber: { selector: `#cardNumber_${id}_${setupKey}`, placeholder: '0000 0000 0000 0000' },
        cvv: { selector: `#cvv_${id}_${setupKey}`, placeholder: '999' },
        expiryDate: { selector: `#expiryDate_${id}_${setupKey}`, placeholder: 'MM / YY' },
      },
    });
  }, [ priceState?.currency.code, id, accountId ]);

  const getTokenizeOptions = useMemo(() => {
    if (!priceState || !paymentState) {
      return;
    }

    const plan = priceState.plans[paymentState.plan];

    if (!plan) {
      return;
    }

    return (): CardOptions => ({
      amount: Math.floor(plan.deposit * 100),
      transactionType: 'PAYMENT',
      paymentType: 'CARD',
      merchantRefNum: getMerchantRefNum(metaState.enrollment?.id),
      customerDetails: {
        holderName: 'Dave Welsh',
        profile: {
          firstName: address.firstName,
          lastName: address.lastName,
          email: address.emailAddress,
          phone: address.telephoneNumber,
        },
        billingDetails: {
          street: address.address1,
          street2: address.address2,
          city: address.city,
          ...(address.provinceCode ? { state: address.provinceCode } : undefined),
          zip: address.postalCode ?? 'NA',
          country: address.countryCode,
        },
      },
      threeDs: {
        deviceChannel: 'BROWSER',
        merchantUrl: 'https://www.qccareerschool.com',
        requestorChallengePreference: 'CHALLENGE_MANDATED',
        useThreeDSecureVersion2: true,
        ...(paymentState.plan === 'full'
          ? { authenticationPurpose: 'PAYMENT_TRANSACTION' }
          : { authenticationPurpose: 'INSTALMENT_TRANSACTION', maxAuthorizationsForInstalmentPayment: plan.installments, billingCycle: { endDate: '2030-01-01', frequency: 28 } }),
        profile: {
          email: address.emailAddress,
          phone: address.telephoneNumber,
        },
      },
      merchantDescriptor: {
        dynamicDescriptor: props.school.substring(0, 19),
        phone: '833-600-3751',
      },
    });
  }, [ props.school, address, metaState.enrollment, priceState, paymentState ]);

  if (!getSetupOptions || !getTokenizeOptions || !apiKey) {
    return;
  }

  const handleTokenize = (token: string) => {
    void props.onCharge(token, props.company);
  };

  const handleTokenizeError = (err: unknown, type: PaymentType) => {
    console.error(err, type);
    if (isTokenizeError(err)) {
      setTokenizeError(err);
    }
  };

  return (
    <>
      <Modal size="sm" show={props.show} onHide={props.onHide} backdrop="static">
        <ModalHeader closeButton><strong>Payment Details</strong></ModalHeader>
        <ModalBody>
          <PaysafeForm
            apiKey={apiKey}
            getSetupOptions={getSetupOptions}
            cardContainer={<CardForm id={id} error={tokenizeError} />}
            getCardTokenizeOptions={getTokenizeOptions}
            onTokenize={handleTokenize}
            onSetupError={handleSetupError}
            onTokenizeError={handleTokenizeError}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

const handleSetupError = console.error;

const getMerchantRefNum = (enrollmentId?: number) => {
  const enrollmentPart = enrollmentId ? `_${enrollmentId}` : '';
  return `enrollment_${Date.now().toString(36)}_${Math.random().toString(36).substring(2)}${enrollmentPart}`;
};

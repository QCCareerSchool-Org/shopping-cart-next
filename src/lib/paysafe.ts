import type { CurrencyCode } from '@/domain/currencyCode';
import type { PaysafeCompany } from '@/domain/paysafeCompany';

type Environment = 'LIVE' | 'TEST';

interface SetupOptions {
  environment: Environment;
  // currencyCode: CurrencyCode;
  fields: {
    cardNumber: { selector: string; placeholder: string };
    expiryDate: { selector: string; placeholder: string };
    cvv: { selector: string; placeholder: string };
  };
  style?: {
    input?: {
      'font-family'?: string;
      'font-weight'?: string;
      'font-size'?: string;
      'color'?: string;
    };
  };
}

export interface Paysafe {
  fields: {
    setup: (apiKey: string, options: SetupOptions, callback: (instance: PaysafeInstance, err: Error | null) => void) => void;
  };
  threedsecure: {
    start: (apiKey: string, data: ThreeDSecureData, callback: (deviceFingerprintingId: string, err: unknown) => void) => void;
  };
}

interface ThreeDSecureData {
  environment: Environment;
  accountId: number;
  card: {
    paymentToken: string;
  };
}

declare const paysafe: Paysafe;

type PaysafeFieldsCallback = (eventInstance: unknown, event: unknown) => void;
type PaysafeEvents = 'Focus' | 'Blur' | 'Valid' | 'Invalid' | 'FieldValueChange' | 'InvalidCharacter';

interface PaysafeThreeDSOptions {
  amount: number;
  currency: string;
  accountId: number;
  useThreeDSecureVersion2?: boolean;
  authenticationPurpose?: 'PAYMENT_TRANSACTION' | 'INSTALMENT_TRANSACTION';
  maxAuthorizationsForInstalmentPayment?: number;
  billingCycle?: {
    endDate: string;
    frequency: number;
  };
  requestorChallengePreference?: 'CHALLENGE_MANDATED' | 'CHALLENGE_REQUESTED' | 'NO_PREFERENCE';
}

interface PaysafeVaultOptions {
  holderName?: string;
  billingAddress?: {
    country: string;
    zip: string;
    state?: string;
    city?: string;
    street?: string;
    street2?: string;
  };
  shippingAddress?: {
    recipientName?: string;
    street?: string;
    street2?: string;
    city?: string;
    country: string;
    zip: string;
    state?: string;
    shipMethod?: 'N' | 'T' | 'C' | 'O' | 'S';
  };
}

export interface TokenizeOptions {
  threeDS?: PaysafeThreeDSOptions;
  vault?: PaysafeVaultOptions;
}

type TokenizeCallback = (tokenInstance: unknown, err: unknown, result: { token: string }) => void;

interface TokenizeFunction {
  (options: TokenizeOptions, callback: TokenizeCallback): void;
  (callback: TokenizeCallback): void;
}

export interface PaysafeInstance {
  tokenize: TokenizeFunction;
  fields: (selector: string) => {
    valid: (callback: PaysafeFieldsCallback) => void;
    invalid: (callback: PaysafeFieldsCallback) => void;
    on: (event: PaysafeEvents, callback: PaysafeFieldsCallback) => void;
  };
}

const getSetupOptions = (company: PaysafeCompany, cardNumberId: string, expiryDateId: string, cvvId: string): SetupOptions => ({
  environment: process.env.NODE_ENV === 'production' ? 'LIVE' : 'TEST',
  fields: {
    cardNumber: { selector: `#${cardNumberId}`, placeholder: 'Card Number' },
    expiryDate: { selector: `#${expiryDateId}`, placeholder: 'Exp. Date' },
    cvv: { selector: `#${cvvId}`, placeholder: 'CSC' },
  },
  style: {
    input: {
      'font-family': 'Helvetica,Arial,sans-serif',
      'font-weight': 'normal',
      'font-size': '14px',
      'color': 'black',
    },
  },
});

const setup = async (apiKey: string, options: SetupOptions): Promise<PaysafeInstance> => {
  return new Promise<PaysafeInstance>((resolve, reject) => {
    paysafe.fields.setup(apiKey, options, (instance: PaysafeInstance, err: Error | null) => {
      if (err) {
        reject(err); return;
      }
      resolve(instance);
    });
  });
};

/**
 * Creates a new paysafe instance
 * @param apiKey the single-use (public) API key to use
 * @param options the options
 */
export async function createInstance(company: PaysafeCompany, cardNumberId: string, expiryDateId: string, cvvId: string): Promise<PaysafeInstance> {
  const options = getSetupOptions(company, cardNumberId, expiryDateId, cvvId);
  return setup(apiKeys[company], options);
}

interface Address {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  provinceCode: string | null;
  postalCode: string;
  countryCode: string;
}

const getTokenizeOptions = (company: PaysafeCompany, currencyCode: CurrencyCode, address: Address, billingAddress: Address, billingAddressSame: boolean): TokenizeOptions | undefined => {
  if (company === 'GB' && currencyCode === 'GBP') {
    const accountId = (accounts[company] as Record<string, number>)[currencyCode];
    if (typeof accountId === 'undefined') {
      throw Error(`Currency ${currencyCode} not supported by ${company} company`);
    }
    const options: TokenizeOptions = {
      threeDS: {
        amount: 0,
        currency: currencyCode,
        accountId,
        useThreeDSecureVersion2: true,
        requestorChallengePreference: 'CHALLENGE_MANDATED',
      },
      vault: {
        holderName: `${address.firstName} ${address.lastName}`,
        billingAddress: billingAddressSame
          ? {
            country: address.countryCode,
            zip: address.postalCode || '0',
            city: address.city,
            street: address.address1,
          }
          : {
            country: billingAddress.countryCode,
            zip: billingAddress.postalCode || '0',
            city: billingAddress.city,
            street: billingAddress.address1,
          },
        shippingAddress: {
          recipientName: `${address.firstName} ${address.lastName}`,
          street: address.address1,
          city: address.city,
          country: address.countryCode,
          zip: address.postalCode || '0',
          shipMethod: 'S',
        },
      },
    };

    if (options.vault?.billingAddress) {
      if (billingAddressSame) {
        if (address.address2) {
          options.vault.billingAddress.street2 = address.address2;
        }
        if (address.provinceCode) {
          options.vault.billingAddress.state = address.provinceCode;
        }
      } else {
        if (billingAddress.address2) {
          options.vault.billingAddress.street2 = billingAddress.address2;
        }
        if (billingAddress.provinceCode) {
          options.vault.billingAddress.state = billingAddress.provinceCode;
        }
      }
    }

    if (options.vault?.shippingAddress) {
      if (address.address2) {
        options.vault.shippingAddress.street2 = address.address2;
      }
      if (address.provinceCode) {
        options.vault.shippingAddress.state = address.provinceCode;
      }
    }

    return options;
  }
};

const tokenize = async (instance: PaysafeInstance, options?: TokenizeOptions): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (typeof options === 'undefined') {
      instance.tokenize((tokenInstance, err, result) => {
        if (err) {
          // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
          reject(err); return;
        }
        resolve(result.token);
      });
    } else {
      instance.tokenize(options, (tokenInstance, err, result) => {
        if (err) {
          // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
          reject(err); return;
        }
        resolve(result.token);
      });
    }
  });
};

/**
 * Submits the hosted form to Paysafe and returns a single-use token
 * @param instance the Paysafe instance to use
 */
export const getToken = async (instance: PaysafeInstance, company: PaysafeCompany, currencyCode: CurrencyCode, address: Address, billingAddress: Address, billingAddressSame: boolean): Promise<string> => {
  const options = getTokenizeOptions(company, currencyCode, address, billingAddress, billingAddressSame);
  return tokenize(instance, options);
};

export async function threeDSecureStart(apiKey: string, accountId: number, paymentToken: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const data: ThreeDSecureData = {
      environment: process.env.NODE_ENV === 'production' ? 'LIVE' : 'TEST',
      accountId,
      card: {
        paymentToken,
      },
    };
    paysafe.threedsecure.start(apiKey, data, (deviceFingerprintingId: string, err: unknown) => {
      if (err) {
        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
        reject(err); return;
      }
      resolve(deviceFingerprintingId);
    });
  });
}

const accounts = process.env.NODE_ENV === 'production'
  ? {
    CA: {
      CAD: 1002521124,
      NZD: 1002567684,
      AUD: 1002567744,
      GBP: 1002567754,
    },
    US: {
      USD: 1002704564,
    },
    GB: {
      GBP: 1002659124,
      AUD: 1002649432,
      NZD: 1002818994,
    },
  }
  : {
    CA: {
      CAD: 1001091500,
      NZD: 1001091500,
      AUD: 1001091500,
      GBP: 1001091500,
    },
    US: {
      USD: 1001091500,
    },
    GB: {
      GBP: 1001091500,
      AUD: 1001091500,
      NZD: 1001091500,
    },
  };

const apiKeys = process.env.NODE_ENV === 'production'
  ? {
    CA: 'T1QtMjM2NjU0OkItcDEtMC01OWY5ZTIzNS0wLTMwMmMwMjE0MzAzYTA1ZDYzNTYwMGMyMzBhNzdhMzk4MDU4NDkzY2I2NTFhOGI2NTAyMTQxOTBjMzM3NzhlZGFkMGVmNzQ4NDkzYjE5NDEyMzk2NGNkYjU3NGFh',
    US: 'T1QtMjM2NjU0OkItcDEtMC01OWY5ZTIzNS0wLTMwMmMwMjE0MzAzYTA1ZDYzNTYwMGMyMzBhNzdhMzk4MDU4NDkzY2I2NTFhOGI2NTAyMTQxOTBjMzM3NzhlZGFkMGVmNzQ4NDkzYjE5NDEyMzk2NGNkYjU3NGFh',
    GB: 'T1QtMzEyOTc0OkItcDEtMC01ZDFlMDAwYS0wLTMwMmMwMjE0NTY4ZmM1MjE4M2MyYTI3YWQ1MWMxNzA2NGVjM2Y1NjEwZDIwNjc0OTAyMTQ2ZTQ5OTBkOGM0MTY3NDlkZWZlYThiZGU2NDY3MDA2NGJlNDA1Njc3',
  }
  : {
    CA: 'T1QtNzkwMTA6Qi1xYTItMC01OGUyOTQ0Yy0wLTMwMmQwMjE0M2VlZjg5YTcwMTEzZTNjNGY1MGI0MjdjYzU1N2NlOTQ1ZjRlMjRhNTAyMTUwMDk1YTNlMjc1N2M4MjMwOGNjYzNkODhiOGRhNWY1NDdlYzVhOTU5M2M=',
    US: 'T1QtNzkwMTA6Qi1xYTItMC01OGUyOTQ0Yy0wLTMwMmQwMjE0M2VlZjg5YTcwMTEzZTNjNGY1MGI0MjdjYzU1N2NlOTQ1ZjRlMjRhNTAyMTUwMDk1YTNlMjc1N2M4MjMwOGNjYzNkODhiOGRhNWY1NDdlYzVhOTU5M2M=',
    GB: 'T1QtNzkwMTA6Qi1xYTItMC01OGUyOTQ0Yy0wLTMwMmQwMjE0M2VlZjg5YTcwMTEzZTNjNGY1MGI0MjdjYzU1N2NlOTQ1ZjRlMjRhNTAyMTUwMDk1YTNlMjc1N2M4MjMwOGNjYzNkODhiOGRhNWY1NDdlYzVhOTU5M2M=',
  };

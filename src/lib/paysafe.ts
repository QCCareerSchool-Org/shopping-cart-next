export type Paysafe = {
  fields: {
    setup: (apiKey: string, options: unknown, callback: (instance: PaysafeInstance, err: Error | null) => void) => void;
  };
  threedsecure: {
    start: (apiKey: string, data: ThreeDSecureData, callback: (deviceFingerprintingId: string, err: unknown) => void) => void;
  };
};

type ThreeDSecureData = {
  environment: 'LIVE' | 'TEST';
  accountId: number;
  card: {
    paymentToken: string;
  };
};

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

/**
 * Creates a new paysafe instance
 * @param apiKey the single-use (public) API key to use
 * @param options the options
 */
export async function createInstance(apiKey: string, options: unknown): Promise<PaysafeInstance> {
  return new Promise<PaysafeInstance>((resolve, reject) => {
    paysafe.fields.setup(apiKey, options, (instance: PaysafeInstance, err: Error | null) => {
      if (err) {
        return reject(err);
      }
      resolve(instance);
    });
  });
}

/**
 * Submits the hosted form to Paysafe and returns a single-use token
 * @param instance the Paysafe instance to use
 */
export async function tokenize(instance: PaysafeInstance, options?: TokenizeOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof options === 'undefined') {
      instance.tokenize((tokenInstance, err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result.token);
      });
    } else {
      instance.tokenize(options, (tokenInstance, err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result.token);
      });
    }
  });
}

export async function threeDSecureStart(apiKey: string, accountId: number, paymentToken: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const data: ThreeDSecureData = {
      environment: 'LIVE',
      accountId,
      card: {
        paymentToken,
      },
    };
    paysafe.threedsecure.start(apiKey, data, (deviceFingerprintingId: string, err: unknown) => {
      if (err) {
        return reject(err);
      }
      resolve(deviceFingerprintingId);
    });
  });
}

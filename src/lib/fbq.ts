import { normalizeCity, normalizeEmailAddress, normalizeName, normalizeState, normalizeTelephoneNumber } from './hash';
import type { Enrollment } from '@/domain/enrollment';

interface Options {
  eventID?: string;
}

export interface InitParams {
  em?: string;
  fn?: string;
  ln?: string;
  ct?: string;
  st?: string;
  country?: string;
  ph?: string;
}

interface FBQ {
  (action: 'init', pixelId: string, params?: InitParams): void;
  (action: 'track', type: 'Lead', params?: Record<never, string>, options?: Options): void;
  (action: 'track', type: 'PageView', params?: { page_url?: string }, options?: Options): void;
  (action: 'track', type: 'Purchase', params: { value: number; currency: string }, options: Options): void;
  (action: 'trackCustom', type: 'VirtualPageView', params: { url: string }): void;
}

declare global {
  interface Window {
    fbq?: FBQ;
  }
}

export const fbqPageview = (url?: string): void => {
  if (typeof url !== 'undefined') {
    // log the page view with a specific URL
    window.fbq?.('track', 'PageView', { page_url: url }); // eslint-disable-line camelcase
    return;
  }
  window.fbq?.('track', 'PageView');
};

interface AdditionalData {
  emailAddress: string;
  telephoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  city: string | null;
  province: string | null;
  country: string | null;
}

export const fbqLead = (eventId?: string, additionalData?: AdditionalData): void => {
  const facebookId = process.env.FACEBOOK_ID;

  if (facebookId && additionalData) {
    const params: InitParams = {};
    if (additionalData.emailAddress) {
      params.em = normalizeEmailAddress(additionalData.emailAddress);
    }
    if (additionalData.telephoneNumber) {
      params.ph = normalizeTelephoneNumber(additionalData.telephoneNumber);
    }
    if (additionalData.firstName) {
      params.fn = normalizeName(additionalData.firstName);
    }
    if (additionalData.lastName) {
      params.ln = normalizeName(additionalData.lastName);
    }
    if (additionalData.city) {
      params.ct = normalizeCity(additionalData.city);
    }
    if (additionalData.province) {
      params.st = normalizeState(additionalData.province);
    }
    if (additionalData.country) {
      params.country = additionalData.country.toLowerCase();
    }
    window.fbq?.('init', facebookId, params);
  }

  if (typeof eventId !== 'undefined') {
    // log the conversion with a specfic eventID
    window.fbq?.('track', 'Lead', undefined, { eventID: eventId });
    return;
  }
  window.fbq?.('track', 'Lead');
};

export const fbqSale = (enrollment: Enrollment): void => {
  const facebookId = process.env.FACEBOOK_ID;
  if (facebookId) {
    const initParams: InitParams = {
      em: normalizeEmailAddress(enrollment.emailAddress),
      fn: normalizeName(enrollment.firstName),
      ln: normalizeName(enrollment.lastName),
      ph: normalizeTelephoneNumber(enrollment.telephoneNumber),
      ct: normalizeCity(enrollment.city),
      country: enrollment.countryCode.toLowerCase(),
    };

    if (enrollment.provinceCode) {
      initParams.st = normalizeState(enrollment.provinceCode);
    }

    window.fbq?.('init', facebookId, initParams);
  }
  window.fbq?.('track', 'Purchase', { value: enrollment.cost, currency: enrollment.currencyCode }, { eventID: enrollment.id.toString() });
};

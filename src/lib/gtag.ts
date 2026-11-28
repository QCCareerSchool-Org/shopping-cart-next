import type { PaymentPlan } from '@/domain/paymentPlan';
import type { CoursePrice, Price } from '@/domain/price';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// log the page view with a specific URL
export const gaPageview = (id: string, url: string): void => {
  window.gtag?.('config', id, {
    page_path: url, // eslint-disable-line camelcase
  });
};

// log an event
export const gaEvent = (action: string, params?: unknown): void => {
  window.gtag?.('event', action, params);
};

export interface GAUserData {
  email: string;
  phone_number?: string; // can't include phone_number because it must be in E.164 format and we don't explicitly ask for a telephone country code
  address?: {
    first_name?: string;
    last_name?: string;
    street?: string;
    city?: string;
    region?: string;
    /** Google says "5-digit format" (seems to only consider the United States) */
    postal_code?: string;
    country?: string;
  };
}

export const gaUserData = (emailAddress: string, telephoneNumber: string | null, firstName: string | null, lastName: string | null, city: string | null, provinceCode: string | null, countryCode: string | null) => {
  const userData: GAUserData = {
    email: emailAddress,
  };
  if (telephoneNumber) {
    // eslint-disable-next-line camelcase
    userData.phone_number = telephoneNumber;
  }
  if (firstName || lastName || city || provinceCode || countryCode) {
    userData.address = {};
    if (firstName) {
    // eslint-disable-next-line camelcase
      userData.address.first_name = firstName.toLowerCase();
    }
    if (lastName) {
    // eslint-disable-next-line camelcase
      userData.address.last_name = lastName.toLowerCase();
    }
    if (city) {
      userData.address.city = city.toLowerCase();
    }
    if (provinceCode) {
      userData.address.region = provinceCode.toLowerCase();
    }
    if (countryCode) {
      userData.address.country = countryCode.toLowerCase();
    }
  }

  window.gtag?.('set', 'user_data', userData);
};

interface GAItem {
  /** GA4 item id */
  item_id: string;
  item_name: string;
  /** unit price after discounts */
  price: number;
  /** unit discount */
  discount: number;
  quantity: number;
  /** Google Ads dynamic remarketing id */
  id: string;
  google_business_vertical: 'education';
}

interface GAEcommerceParams {
  send_to: string[];
  currency: string;
  value: number;
  coupon?: string;
  items: GAItem[];
}

export type GACartEvent = 'add_to_cart' | 'remove_from_cart' | 'begin_checkout';

const round = (n: number): number => Math.round(n * 100) / 100;

/**
 * Sends a GA4 / Google Ads ecommerce event
 * @param event the event name
 * @param sendTo the GA4 measurement id and Google Ads id (undefined entries are ignored)
 * @param price the price that the courses come from
 * @param courses the courses to include as items
 * @param plan the selected payment plan
 */
export const gaCartEvent = (event: GACartEvent, sendTo: (string | undefined)[], price: Price, courses: CoursePrice[], plan: PaymentPlan): void => {
  const targets = sendTo.filter((t): t is string => !!t);
  if (targets.length === 0 || courses.length === 0) {
    return;
  }

  const items = courses.map<GAItem>(c => {
    const total = (plan === 'part' ? c.plans.part?.total : undefined) ?? c.plans.full.total;
    return {
      item_id: c.code, // eslint-disable-line camelcase
      item_name: c.name, // eslint-disable-line camelcase
      price: round(total),
      discount: round(c.cost - total),
      quantity: 1,
      id: c.code,
      google_business_vertical: 'education', // eslint-disable-line camelcase
    };
  });

  const params: GAEcommerceParams = {
    send_to: targets, // eslint-disable-line camelcase
    currency: price.currency.code,
    value: round(items.reduce((sum, i) => sum + (i.price * i.quantity), 0)),
    items,
  };

  if (price.promoCodeRecognized && price.promoCode) {
    params.coupon = price.promoCode;
  }

  window.gtag?.('event', event, params);
};

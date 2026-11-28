import type { PaymentPlan } from '@/domain/paymentPlan';
import type { CoursePrice, Price } from '@/domain/price';
import type { GoogleIds } from '@/lib/googleIds';
import type { AddressState } from '@/state/address';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export interface GAUserData {
  email: string;
  /**
   * Must be in E.164 format.
   * Omit when the telephone country code cannot be reliably determined.
   */
  phone_number?: string;
  /**
   * Address-based matching requires first_name, last_name,
   * postal_code, and country. Other address fields are optional.
   */
  address?: {
    first_name?: string;
    last_name?: string;
    street?: string;
    city?: string;
    region?: string;
    /**
     * Use five-digit ZIP codes for US addresses.
     * Omit when no postal code is available.
     */
    postal_code?: string;
    country?: string;
  };
}

export interface GAItem {
  item_id: string;
  item_name: string;
  affiliation?: string;
  /** unit price after discounts */
  price: number;
  /** unit discount */
  discount?: number;
  quantity?: number;
}

interface GoogleAdsItem {
  google_business_vertical: string;
}

interface GoogleAdsEducationItem extends GoogleAdsItem {
  /** Must match the Program ID in the Google Ads education data feed */
  id: string;
  google_business_vertical: 'education';
}

/** Whether a telephone number is already in E.164 format (e.g., +16135551234) */
export const isE164 = (telephoneNumber: string): boolean => /^\+[1-9]\d{6,14}$/u.test(telephoneNumber);

// log the page view with a specific URL
export const gaPageview = (id: string, url: string): void => {
  window.gtag?.('config', id, {
    page_path: url, // eslint-disable-line camelcase
  });
};

/** Dispatch an event through the Google tag */
export const gaEvent = (action: string, params?: unknown): void => {
  window.gtag?.('event', action, params);
};

/**
 * Provide customer data for GA4 user-provided data collection and Google Ads Enhanced Conversions.
 * Call before the events that should include it.
 *
 * gtag merges successive user_data values, so the existing value is cleared first. Otherwise
 * fields set on page load from a previous visitor's cookie could be attached to this visitor.
 */
export const gaSetUserData = (userData: GAUserData): void => {
  window.gtag?.('set', 'user_data', null);
  window.gtag?.('set', 'user_data', userData);
};

/**
 * Builds GA user data from the cart's shipping address
 * @param address the values entered in the address form
 * @param telephoneNumber the telephone number in E.164 format, if it could be determined
 */
export const getGAUserDataFromAddress = (address: Pick<AddressState, 'emailAddress' | 'firstName' | 'lastName' | 'address1' | 'city' | 'provinceCode' | 'postalCode' | 'countryCode'>, telephoneNumber?: string): GAUserData => {
  const postalCode = address.countryCode === 'US' ? address.postalCode.trim().substring(0, 5) : address.postalCode.trim();

  const addressData: NonNullable<GAUserData['address']> = {
    ...(address.firstName ? { first_name: address.firstName.trim().toLowerCase() } : undefined), // eslint-disable-line camelcase
    ...(address.lastName ? { last_name: address.lastName.trim().toLowerCase() } : undefined), // eslint-disable-line camelcase
    ...(address.address1 ? { street: address.address1.trim().toLowerCase() } : undefined),
    ...(address.city ? { city: address.city.trim().toLowerCase() } : undefined),
    ...(address.provinceCode ? { region: address.provinceCode.toLowerCase() } : undefined),
    ...(postalCode ? { postal_code: postalCode.toLowerCase() } : undefined), // eslint-disable-line camelcase
    ...(address.countryCode ? { country: address.countryCode.toLowerCase() } : undefined),
  };

  return {
    email: address.emailAddress.trim().toLowerCase(),
    ...(telephoneNumber && isE164(telephoneNumber) ? { phone_number: telephoneNumber } : undefined), // eslint-disable-line camelcase
    ...(Object.keys(addressData).length ? { address: addressData } : undefined),
  };
};

const round = (n: number): number => Math.round(n * 100) / 100;

const getItems = (courses: CoursePrice[], plan: PaymentPlan): GAItem[] => courses.map((c): GAItem => {
  const total = (plan === 'part' ? c.plans.part?.total : undefined) ?? c.plans.full.total;
  return {
    item_id: c.code, // eslint-disable-line camelcase
    item_name: c.name, // eslint-disable-line camelcase
    price: round(total),
    discount: round(c.cost - total),
    quantity: 1,
  };
});

const getValue = (items: GAItem[]): number => round(items.reduce((sum, i) => sum + (i.price * (i.quantity ?? 1)), 0));

const getCoupon = (price: Price): { coupon: string } | undefined => {
  return price.promoCodeRecognized && price.promoCode ? { coupon: price.promoCode } : undefined;
};

/**
 * @param googleIds the GA4 measurement ID and Google Ads ID; each event only uses the ones it applies to
 * @param price the price that the courses come from
 * @param courses the courses that were added
 * @param plan the selected payment plan
 */
export const gaAddToCart = (googleIds: GoogleIds, price: Price, courses: CoursePrice[], plan: PaymentPlan): void => {
  if (courses.length === 0) {
    return;
  }

  const { analyticsId, adsId } = googleIds;
  const items = getItems(courses, plan);
  const value = getValue(items);

  if (analyticsId) {
    // GA4 e-commerce add to cart event
    gaEvent('add_to_cart', {
      send_to: analyticsId, // eslint-disable-line camelcase
      currency: price.currency.code,
      value,
      ...getCoupon(price),
      items,
    });
  }

  if (adsId) {
    // Google Ads dynamic remarketing add to cart event
    gaEvent('add_to_cart', {
      send_to: adsId, // eslint-disable-line camelcase
      value,
      items: items.map((item): GoogleAdsEducationItem => ({
        id: item.item_id,
        google_business_vertical: 'education', // eslint-disable-line camelcase
      })),
    });
  }
};

/**
 * @param googleIds the GA4 measurement ID and Google Ads ID; each event only uses the ones it applies to
 * @param price the price that the courses come from
 * @param courses the courses that were removed
 * @param plan the selected payment plan
 */
export const gaRemoveFromCart = (googleIds: GoogleIds, price: Price, courses: CoursePrice[], plan: PaymentPlan): void => {
  if (courses.length === 0) {
    return;
  }

  const { analyticsId } = googleIds;
  const items = getItems(courses, plan);

  if (analyticsId) {
    // GA4 e-commerce remove from cart event
    gaEvent('remove_from_cart', {
      send_to: analyticsId, // eslint-disable-line camelcase
      currency: price.currency.code,
      value: getValue(items),
      ...getCoupon(price),
      items,
    });
  }
};

/**
 * @param googleIds the GA4 measurement ID and Google Ads ID; each event only uses the ones it applies to
 * @param price the current price
 * @param plan the selected payment plan
 */
export const gaBeginCheckout = (googleIds: GoogleIds, price: Price, plan: PaymentPlan): void => {
  if (price.courses.length === 0) {
    return;
  }

  const { analyticsId } = googleIds;
  const items = getItems(price.courses, plan);

  if (analyticsId) {
    // GA4 e-commerce begin checkout event
    gaEvent('begin_checkout', {
      send_to: analyticsId, // eslint-disable-line camelcase
      currency: price.currency.code,
      value: getValue(items),
      ...getCoupon(price),
      items,
    });
  }
};

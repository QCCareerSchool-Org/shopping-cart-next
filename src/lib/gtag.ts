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

export const gaUserData = (emailAddress: string, telephoneNumber?: string, firstName?: string, lastName?: string, city?: string, provinceCode?: string, countryCode?: string) => {
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

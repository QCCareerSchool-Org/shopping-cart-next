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

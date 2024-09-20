'use client';

import type { FC, PropsWithChildren } from 'react';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export const CaptchaProvider: FC<PropsWithChildren> = ({ children }) => (
  <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}>{children}</GoogleReCaptchaProvider>
);

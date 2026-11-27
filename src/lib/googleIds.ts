import type { School } from '@/domain/school';

export interface GoogleIds {
  analyticsId?: string;
  adsId?: string;
}

/**
 * Returns the Google Analytics and Google Ads IDs for a school
 *
 * NEXT_PUBLIC_ variables are inlined at build time, so each one must be referenced statically
 */
export const getGoogleIds = (school: School): GoogleIds => {
  switch (school) {
    case 'QC Design School':
      return { analyticsId: process.env.NEXT_PUBLIC_DESIGN_GOOGLE_ANALYTICS_ID, adsId: process.env.NEXT_PUBLIC_DESIGN_GOOGLE_ADS_ID };
    case 'QC Event School':
      return { analyticsId: process.env.NEXT_PUBLIC_EVENT_GOOGLE_ANALYTICS_ID, adsId: process.env.NEXT_PUBLIC_EVENT_GOOGLE_ADS_ID };
    case 'QC Makeup Academy':
      return { analyticsId: process.env.NEXT_PUBLIC_MAKEUP_GOOGLE_ANALYTICS_ID, adsId: process.env.NEXT_PUBLIC_MAKEUP_GOOGLE_ADS_ID };
    case 'QC Pet Studies':
      return { analyticsId: process.env.NEXT_PUBLIC_PET_GOOGLE_ANALYTICS_ID, adsId: process.env.NEXT_PUBLIC_PET_GOOGLE_ADS_ID };
    case 'QC Wellness Studies':
      return { analyticsId: process.env.NEXT_PUBLIC_WELLNESS_GOOGLE_ANALYTICS_ID, adsId: process.env.NEXT_PUBLIC_WELLNESS_GOOGLE_ADS_ID };
    case 'Winghill Writing School':
      return { analyticsId: process.env.NEXT_PUBLIC_WRITING_GOOGLE_ANALYTICS_ID, adsId: process.env.NEXT_PUBLIC_WRITING_GOOGLE_ADS_ID };
    default:
      return {};
  }
};

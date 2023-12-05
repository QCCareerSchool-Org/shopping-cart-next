'use server';

export const getDate = (dateParam?: string | string[]): number => {
  if ((process.env.VERCEL_ENV === 'development' || process.env.VERCEL_ENV === 'preview') && typeof dateParam === 'string') {
    const override = new Date(dateParam).getTime();
    if (!isNaN(override)) {
      return override;
    }
  }
  return new Date().getTime();
};

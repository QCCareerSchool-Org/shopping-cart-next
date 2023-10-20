export const getDate = (dateParam?: string | string[]): number => {
  if (process.env.NODE_ENV === 'development' && typeof dateParam === 'string') {
    return new Date(dateParam).getTime();
  }
  return new Date().getTime();
};

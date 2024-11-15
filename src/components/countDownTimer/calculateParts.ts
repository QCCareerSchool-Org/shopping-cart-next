type CalculatePartsResult = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const calculateParts = (durationInMs: number): CalculatePartsResult => {
  const duration = durationInMs / 1000;
  const seconds = Math.floor(duration) % 60;
  const minutes = Math.floor(duration / 60) % 60;
  const hours = Math.floor(duration / 3600) % 24;
  const days = Math.floor(duration / 86400);
  return { days, hours, minutes, seconds };
};

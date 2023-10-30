type CalculatePartsResult = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const calculateParts = (miliseconds: number): CalculatePartsResult => {
  let msRemaining = miliseconds;

  const milisecondsPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(msRemaining / milisecondsPerDay);
  msRemaining -= days * milisecondsPerDay;

  const milisecondsPerHour = 1000 * 60 * 60;
  const hours = Math.floor(msRemaining / milisecondsPerHour);
  msRemaining -= hours * milisecondsPerHour;

  const milisecondsPerMinute = 1000 * 60;
  const minutes = Math.floor(msRemaining / milisecondsPerMinute);
  msRemaining -= minutes * milisecondsPerMinute;

  const milisecondsPerSecond = 1000;
  const seconds = Math.floor(msRemaining / milisecondsPerSecond);
  msRemaining -= seconds * milisecondsPerSecond;

  return { days, hours, minutes, seconds };
};

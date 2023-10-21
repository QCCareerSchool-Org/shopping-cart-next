export const round = (num: number, precision = 2): number => {
  const maxPrecision = 15;
  const base = 10;
  const factor = base ** precision;
  const m = Number((Math.abs(num) * factor).toPrecision(maxPrecision));
  return Math.round(m) / factor * Math.sign(num);
};

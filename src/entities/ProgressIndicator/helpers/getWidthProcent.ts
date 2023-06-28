export const getWidthProcent = (
  maxValue: number,
  currentValue: number
): number => {
  if (maxValue <= currentValue) {
    return 100;
  }
  return +((currentValue / maxValue) * 100).toFixed(2);
};

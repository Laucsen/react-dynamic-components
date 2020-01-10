// Compute the size of a column and return a CSS width line.
export const getWidthGrid = (value: number) => {
  const width = (value / 12) * 100;
  return `width: ${width}%;`;
};

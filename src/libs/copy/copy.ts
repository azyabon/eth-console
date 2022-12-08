export const copy = (str: string) => {
  if (navigator && navigator.clipboard && navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(str);
  }

  return null;
};

export const shorter = (str: string, length = 6): string => {
  return str?.length > 8 ? str.slice(0, length) + "..." + str.slice(-4) : str;
};

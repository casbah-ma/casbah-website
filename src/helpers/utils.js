export const waitLoad = (sec) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

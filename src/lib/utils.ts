export const range = (start: number = 0, end: number) => {
  let result: number[] = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }

  return result;
};

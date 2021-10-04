const promiseDelay = <T>(interval: number, value?: T) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(value as T);
    }, interval);
  });
};

export default promiseDelay;

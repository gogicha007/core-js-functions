function retry(func, attempts) {
  return () => {
    try {
      return func();
    } catch (error) {
      if (--attempts) return retry(func, attempts)();
      return func();
    }
  };
}

const errorThrower = () => {
  throw new Error('test');
};
console.log(retry(errorThrower, 2)());

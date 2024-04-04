function memoize(func) {
  let callCount = 0;
  let cache = null;

  return () => {
    if (callCount === 0) {
      cache = func.call(null);
      callCount += 1;
      return cache;
    }
    return cache;
  };
}

const random = () => Math.random();
const memo = memoize(random);
console.log(memo())
console.log(memo());

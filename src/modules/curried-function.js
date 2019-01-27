export const gte = cutoff => n => n >= cutoff;

// Tiny, recursive autocurry
export const curry = (f, arr = []) => (...args) =>
  (a => (a.length === f.length ? f(...a) : curry(f, a)))([...arr, ...args]);

export const add3 = curry((a, b, c) => a + b + c);

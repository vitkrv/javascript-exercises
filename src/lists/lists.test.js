const service = require('./lists');

function comparator(a, b) {
  return a < b;
}

test('empty input data', () => {
  expect(() => service(null, null, null)).toThrow();
});

test('empty comparator', () => {
  expect(() => service([2], [1], null)).toThrow();
});

test('wrong type of comparator', () => {
  expect(() => service([2], [1], {})).toThrow();
});

test('one item each array', () => {
  expect(service([2], [1], comparator)).toEqual([1, 2]);
});

test('simple values', () => {
  expect(service([1, 2], [0, 3], comparator)).toEqual([0, 1, 2, 3]);
});

test('with repeating', () => {
  expect(service([1, 2, 6, 6], [0, 1, 1, 3], comparator)).toEqual([0, 1, 1, 1, 2, 3, 6, 6]);
});

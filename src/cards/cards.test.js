const service = require('./cards');

test('empty data', () => {
  expect(() => service(null)).toThrow();
});

// Positive tests

test('Visa', () => {
  expect(service(4485312678642542)).toBeTruthy();
});

test('Visa Electron', () => {
  expect(service(4913718053571357)).toBeTruthy();
});

test('MasterCard', () => {
  expect(service(5405827821668072)).toBeTruthy();
});

test('American Express', () => {
  expect(service(371185987578861)).toBeTruthy();
});

// Negative tests

test('data with characters', () => {
  expect(service('invalid input data')).toBeFalsy();
});
test('incorrect number', () => {
  expect(service(1111111111111111)).toBeFalsy();
});


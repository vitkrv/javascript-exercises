const service = require('./brackets');

test('empty data', () => {
  expect(service(null)).toBeFalsy();
});

// Positive tests

test('no brackets', () => {
  expect(service('foo')).toBeTruthy();
});

test('round brackets', () => {
  expect(service('(foo)')).toBeTruthy();
});

test('square brackets', () => {
  expect(service('[foo]')).toBeTruthy();
});

test('curly brackets', () => {
  expect(service('{foo}')).toBeTruthy();
});

test('nested brackets', () => {
  expect(service('(foo{bar})')).toBeTruthy();
});

test('several brackets', () => {
  expect(service('(foo){bar}')).toBeTruthy();
});

// Negative tests

test('closing bracket is missed', () => {
  expect(service('(foo')).toBeFalsy();
});

test('opening bracket is missed', () => {
  expect(service('foo)')).toBeFalsy();
});

test('brackets not matched', () => {
  expect(service('(foo]')).toBeFalsy();
});

test('brackets not ordered', () => {
  expect(service('(foo[bar)]')).toBeFalsy();
});


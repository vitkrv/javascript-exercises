const service = require('./words');

test('empty data', () => {
  expect(() => service(null)).toThrow();
});

test('empty array', () => {
  expect(() => service([])).toThrow();
});

// Positive tests

test('one word', () => {
  expect(service(['ab'])).toEqual([['ab']]);
});

test('two similar words', () => {
  expect(service(['ab', 'ba'])).toEqual([['ab', 'ba']]);
});

test('two similar words with repeated characters', () => {
  expect(service(['abb', 'baa'])).toEqual([['abb', 'baa']]);
});

test('two different words', () => {
  expect(service(['ab', 'cd'])).toEqual([['ab'], ['cd']]);
});

test('two different words with repeated characters', () => {
  expect(service(['aba', 'cdd'])).toEqual([['aba'], ['cdd']]);
});

test('few various words', () => {
  expect(service(['ab', 'cd', 'ac', 'ca', 'ba'])).toEqual([['ab', 'ba'], ['cd'], ['ac', 'ca']]);
});

test('few various words with repeated characters', () => {
  expect(service(['ab', 'cd', 'bab', 'ac', 'ccb', 'acc'])).toEqual([['ab', 'bab'], ['cd'], ['ac', 'acc'], ['ccb']]);
});

// Negative tests

test('few various words with empty value', () => {
  expect(service(['ab', '', 'ba'])).toEqual([['ab', 'ba'], ['']]);
});


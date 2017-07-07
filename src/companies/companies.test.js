const service = require('./companies');

test('empty data', () => {
  expect(() => service(null)).toThrow();
});

test('one company and one department', () => {
  let inputData = [{
    company: 'foo',
    department: 'bar'
  }];
  expect(service(inputData)).toEqual({foo: ['bar']});
});

test('empty company', () => {
  let inputData = [{
    company: null,
    department: 'bar'
  }];
  expect(service(inputData)).toEqual({});
});

test('empty department', () => {
  let inputData = [{
    company: 'foo',
    department: null
  }];
  expect(service(inputData)).toEqual({foo: []});
});

test('empty department and empty company', () => {
  let inputData = [{
    company: null,
    department: null
  }];
  expect(service(inputData)).toEqual({});
});

test('two companies and few departments', () => {
  let inputData = [
    {
      company: 'foo',
      department: 'foo'
    },
    {
      company: 'fooBar',
      department: 'bar'
    },
    {
      company: 'foo',
      department: 'bar'
    }];
  expect(service(inputData)).toEqual({foo: ['foo', 'bar'], fooBar: ['bar']});
});

test('combined input data', () => {
  let inputData = [
    {
      company: null,
      department: 'foo'
    },
    {
      company: 'fooBar',
      department: 'bar'
    },
    {
      company: 'bar',
      department: null
    },
    {
      company: 'foo',
      department: 'bar'
    }];
  expect(service(inputData)).toEqual({foo: ['bar'], bar: [], fooBar: ['bar']});
});

